# Generated by Django 4.0.3 on 2022-04-08 16:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('crimereport', '0002_alter_crimereport_modified'),
    ]

    operations = [
        migrations.AddField(
            model_name='crimereport',
            name='status',
            field=models.CharField(default='pending', max_length=120),
        ),
    ]