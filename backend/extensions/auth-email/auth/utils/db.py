"""Database utilities."""
import os
import psycopg2
from typing import Any


SCHEMA = "t_p18279400_green_circle_initiat"


def get_connection():
    """Get database connection."""
    dsn = os.environ.get('DATABASE_URL')
    if not dsn:
        raise ValueError('DATABASE_URL not configured')
    return psycopg2.connect(dsn)


def table(name: str) -> str:
    """Get fully qualified table name with schema."""
    return f'"{SCHEMA}"."{name}"'


def escape(value: Any) -> str:
    """Escape value for SQL (simple protocol)."""
    if value is None:
        return 'NULL'
    if isinstance(value, bool):
        return 'TRUE' if value else 'FALSE'
    if isinstance(value, (int, float)):
        return str(value)
    # String - escape quotes
    s = str(value).replace("'", "''")
    return f"'{s}'"