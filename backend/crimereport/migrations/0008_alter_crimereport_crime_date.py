# Generated by Django 4.0.4 on 2022-04-15 14:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('crimereport', '0007_alter_crimereport_crime_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='crimereport',
            name='crime_date',
            field=models.DateTimeField(),
        ),
    ]