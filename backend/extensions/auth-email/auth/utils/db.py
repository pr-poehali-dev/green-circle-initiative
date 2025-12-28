"""Database utilities."""
import os
import psycopg2
import psycopg2.extensions
from datetime import datetime


# Database schema name (specific to this project)
DB_SCHEMA = 't_p18279400_green_circle_initiat'


def get_connection():
    """Get database connection using Simple Query Protocol."""
    dsn = os.environ.get('DATABASE_URL')
    if not dsn:
        raise ValueError('DATABASE_URL not configured')
    return psycopg2.connect(dsn)


def table(name: str) -> str:
    """Return fully qualified table name with schema."""
    return f"{DB_SCHEMA}.{name}"


def escape_string(value):
    """Escape string for SQL (Simple Query Protocol)."""
    if value is None:
        return 'NULL'
    if isinstance(value, (int, float, bool)):
        return str(value)
    if isinstance(value, datetime):
        return f"'{value.isoformat()}'"
    # Escape single quotes by doubling them
    escaped = str(value).replace("'", "''")
    return f"'{escaped}'"