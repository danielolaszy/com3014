FROM python:3

# Create app directory

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

# Copy app to the container

COPY . /usr/src/app/

# Install app dependencies

RUN pip3 install -r requirements.txt

# RUN python -m pip install -r requirements.txt

# Bundle app source

EXPOSE 8000

CMD [ "python3", "manage.py", "runserver"]