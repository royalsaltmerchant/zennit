// provider
provider "aws" {
  region = "us-west-1"
  access_key = "AKIAU5VKS6UWFXBOL5E4"
  secret_key = "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"
}
// vpc
resource "aws_vpc" "zennit-vpc" {
  cidr_block = "10.0.0.0/16"
  tags = {
    Name = "zennit-prod"
  }
}
// internet gateway
resource "aws_internet_gateway" "zennit-gw" {
  vpc_id = aws_vpc.zennit-vpc.id

  tags = {
    Name = "zennit-gw"
  }
}
// route table
resource "aws_route_table" "zennit-rt" {
  vpc_id = aws_vpc.zennit-vpc.id

  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.zennit-gw.id
  }

  route {
    ipv6_cidr_block        = "::/0"
    gateway_id = aws_internet_gateway.zennit-gw.id
  }

  tags = {
    Name = "zennit-rt"
  }
}
// subnets
resource "aws_subnet" "zennit-subnet1" {
  vpc_id     = aws_vpc.zennit-vpc.id
  cidr_block = "10.0.1.0/24"
  availability_zone = "us-west-1c"

  tags = {
    Name = "zennit-prod-subnet"
  }
}
// route table association
resource "aws_route_table_association" "zennit-rta" {
  subnet_id      = aws_subnet.zennit-subnet1.id
  route_table_id = aws_route_table.zennit-rt.id
}
// security groups
resource "aws_security_group" "zennit-allow-web" {
  name        = "zennit_allow_web"
  description = "Allow web traffic"
  vpc_id      = aws_vpc.zennit-vpc.id

  ingress {
    description      = "HTTPS"
    from_port        = 443
    to_port          = 443
    protocol         = "tcp"
    cidr_blocks      = ["0.0.0.0/0"]
    ipv6_cidr_blocks = ["::/0"]
  }

  ingress {
    description      = "HTTP"
    from_port        = 80
    to_port          = 80
    protocol         = "tcp"
    cidr_blocks      = ["0.0.0.0/0"]
    ipv6_cidr_blocks = ["::/0"]
  }

  ingress {
    description      = "SSH"
    from_port        = 22
    to_port          = 22
    protocol         = "tcp"
    cidr_blocks      = ["0.0.0.0/0"]
    ipv6_cidr_blocks = ["::/0"]
  }

  egress {
    from_port        = 0
    to_port          = 0
    protocol         = "-1"
    cidr_blocks      = ["0.0.0.0/0"]
    ipv6_cidr_blocks = ["::/0"]
  }

  tags = {
    Name = "allow_web"
  }
}
// network interface
resource "aws_network_interface" "web-server-nic" {
  subnet_id       = aws_subnet.zennit-subnet1.id
  private_ips     = ["10.0.1.50"]
  security_groups = [aws_security_group.zennit-allow-web.id]
}
// elastic IP
resource "aws_eip" "one" {
  vpc                       = true
  network_interface         = aws_network_interface.web-server-nic.id
  associate_with_private_ip = "10.0.1.50"
  depends_on = [aws_internet_gateway.zennit-gw]
}
// ec2 instances
resource "aws_instance" "Zennit_terraform1" {
  ami           = "ami-0d382e80be7ffdae5"
  instance_type = "t2.micro"
  availability_zone = "us-west-1c"
  tags = {
    Name = "zennit-1"
  }
  key_name = "aws-zennit-key1"

  network_interface {
    device_index = 0
    network_interface_id = aws_network_interface.web-server-nic.id
  }
  connection {
    host = self.public_ip
    type = "ssh"
    user = "ubuntu"
    private_key = file("./aws-zennit-key1.pem")
  }
  provisioner "file" {
    source      = "./"
    destination = "~/zennit"
  }
  provisioner "remote-exec" {
    inline = [
      "sh ~/zennit/commands/init_script.sh",
    ]
  }
}