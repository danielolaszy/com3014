# Generated by Django 4.0.3 on 2022-04-08 15:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('crimereport', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='crimereport',
            name='modified',
            field=models.DateTimeField(editable=False),
        ),
    ]
