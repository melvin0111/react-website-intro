from sqlalchemy import Column, Integer, String, DateTime, JSON
from sqlalchemy.sql import func 
from sqlalchemy.dialects.postgresql import JSONB
from app.database import Base

class Event(Base): 
    __tablename__ = "events"

    id = Column(Integer, primaryKey = True, index = True)
    title = Column(String, index = True)
    users = Column(JSONB)

    start_datetime = Column(DateTime(timezone = True))
    end_datetime =  Column(DateTime(timezone = True))
    timezone = Column(Integer, default = 0)
    
    place = Column(String)
    description = Column(String)
    repeat = Column(String)

    attachment_files = Column(JSONB)

    created_time = Column(DateTime(timezone=True), server_default=func.now())
    created_user = Column(Integer)

    updated_time = Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now())
    updates_user = Column(Integer)
