from pydantic import BaseModel, validator, Field
from datetime import datetime
from typing import List, Optional
from enum import Enum

class RepeatEnum(str, Enum):
    daily = "daily"
    weekly = "weekly"
    monthly = "monthly"
    yearly = "yearly"

class EventBase(BaseModel):
    title: str
    users: List[int]
    start_datetime: datetime
    end_datetime: datetime
    timezone: int = 0
    place: str
    description: Optional[str] = None
    repeat: Optional[RepeatEnum] = None
    attachment_files: Optional[List[str]] = None

    # Validator example
    @validator('end_datetime')
    def end_must_be_after_start(cls, v, values, **kwargs):
        if 'start_datetime' in values and v <= values['start_datetime']:
            raise ValueError('end_datetime must be after start_datetime')
        return v

class EventCreate(EventBase):
    pass

class Event(EventBase):
    id: int

    class Config:
        orm_mode = True
