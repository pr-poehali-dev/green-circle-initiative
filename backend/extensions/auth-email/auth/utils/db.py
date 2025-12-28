"""Database utilities."""
import os
import psycopg2
import psycopg2.extensions


def get_connection():
    """Get database connection using Simple Query Protocol."""
    dsn = os.environ.get('DATABASE_URL')
    if not dsn:
        raise ValueError('DATABASE_URL not configured')
    return psycopg2.connect(dsn)


def escape_string(value):
    """Escape string for SQL (Simple Query Protocol)."""
    if value is None:
        return 'NULL'
    if isinstance(value, (int, float)):
        return str(value)
    # Escape single quotes by doubling them
    escaped = str(value).replace("'", "''")
    return f"'{escaped}'"