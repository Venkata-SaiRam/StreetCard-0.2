#!/bin/bash
celery -A api worker -l info &
python3 manage.py runserver 0.0.0.0:8000
