import os

class Config:
    SECRET_KEY = os.environ.get('SECRET_KEY')
    #dev
    # SQLALCHEMY_DATABASE_URI = os.environ.get('SQLALCHEMY_DATABASE_URI')
    #prod
    SQLALCHEMY_DATABASE_URI = 'postgres://uanzcelqelrjpl:4bd1cbb543d22bfdda1a9b6b3d65b96940166bc2b007a676bc7369f01ce97f1b@ec2-34-198-31-223.compute-1.amazonaws.com:5432/dftt6bn5j391qb'
    MAIL_SERVER = 'smtp.googlemail.com'
    MAIL_PORT = 587
    MAIL_USE_TLS = True
    MAIL_USERNAME = os.environ.get('EMAIL_USER')
    MAIL_PASSWORD = os.environ.get('EMAIL_PASS')