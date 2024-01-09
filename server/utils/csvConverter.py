import pandas
def convert_db_to_csv(database_data, csv_file):
    try:
        df = pandas.DataFrame(database_data)

        # Écrivez le DataFrame dans un fichier CSV
        df.to_csv(csv_file, index=False)

        print(f"Conversion réussie. Les données ont été sauvegardées dans {csv_file}")
        return df

    except Exception as e:
        print(f"Une erreur s'est produite : {e}")