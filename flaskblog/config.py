import os

class Config:
    #dev
    # SECRET_KEY = os.environ.get('SECRET_KEY')
    # SQLALCHEMY_DATABASE_URI = os.environ.get('SQLALCHEMY_DATABASE_URI')
    #prod
    SECRET_KEY = '5c4e04fe660e738d24e38866c63d346a'
    # SQLALCHEMY_DATABASE_URI = 'sqlite:///'
    SQLALCHEMY_DATABASE_URI = 'postgres://uanzcelqelrjpl:4bd1cbb543d22bfdda1a9b6b3d65b96940166bc2b007a676bc7369f01ce97f1b@ec2-34-198-31-223.compute-1.amazonaws.com:5432/dftt6bn5j391qb'
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    MAIL_SERVER = 'smtp.googlemail.com'
    MAIL_PORT = 587
    MAIL_USE_TLS = True
    MAIL_USERNAME = 'saltdemotester@gmail.com'
    MAIL_PASSWORD = 'kscdfeafjrkwgnuv'
    FLASK_APP = 'run.py'
    DEBUG = True
