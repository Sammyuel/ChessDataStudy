# -*- coding: utf-8 -*-
# Generated by Django 1.10.7 on 2017-10-23 04:39
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('games', '0004_auto_20171023_0006'),
    ]

    operations = [
        migrations.AddField(
            model_name='game',
            name='clicked',
            field=models.BooleanField(default=False),
        ),
    ]
