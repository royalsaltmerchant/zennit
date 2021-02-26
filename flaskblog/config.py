import os

class Config:
    SECRET_KEY = os.environ.get('SECRET_KEY')
    #dev
    # SQLALCHEMY_DATABASE_URI = os.environ.get('SQLALCHEMY_DATABASE_URI')
    #prod
    SQLALCHEMY_DATABASE_URI = 'postgres://dmfnfxvngrmitp:5763380070eeb38c28fc5ef55d8a561439902651a82d3e41d4cfd532caf7d21d@ec2-18-204-74-74.compute-1.amazonaws.com:5432/dfr96mmk1gu06r'
    MAIL_SERVER = 'smtp.googlemail.com'
    MAIL_PORT = 587
    MAIL_USE_TLS = True
    MAIL_USERNAME = os.environ.get('EMAIL_USER')
    MAIL_PASSWORD = os.environ.get('EMAIL_PASS')