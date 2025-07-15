from django.db import models

# Create your models here

class Student(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=100)
    roll_no = models.CharField(max_length=50, unique=True)
    email = models.EmailField()
    phone_no = models.CharField(max_length=10)
    course = models.CharField(max_length=50)

    def __str__(self):
        return self.name
