# Generated by Django 4.0.3 on 2022-04-08 15:44

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Crimereport',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('location', models.CharField(max_length=120)),
                ('description', models.TextField()),
                ('created', models.DateTimeField(editable=False)),
                ('modified', models.DateTimeField()),
            ],
        ),
    ]
