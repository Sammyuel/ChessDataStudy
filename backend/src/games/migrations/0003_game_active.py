# -*- coding: utf-8 -*-
# Generated by Django 1.10.7 on 2017-10-23 00:49
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('games', '0002_game_information'),
    ]

    operations = [
        migrations.AddField(
            model_name='game',
            name='active',
            field=models.BooleanField(default=True),
        ),
    ]
