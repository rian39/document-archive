import pandas as pd

# Load the file to examine its contents
file_path = '/mnt/data/trombone_notes.xlsx'
trombone_notes = pd.read_excel(file_path)

# Display the first few rows to understand the structure
trombone_notes.head()

