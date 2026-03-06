package org.curiouslearning.swahili_english_nairobiMomTwo.data.database;

import androidx.lifecycle.LiveData;
import androidx.room.Dao;
import androidx.room.Insert;
import androidx.room.OnConflictStrategy;
import androidx.room.Query;
import androidx.room.Transaction;
import org.curiouslearning.swahili_english_nairobiMomTwo.data.model.WebApp;
import java.util.List;

@Dao
public interface WebAppDao {

    @Insert
    void insert(WebApp webApp);

    @Insert(onConflict = OnConflictStrategy.REPLACE)
    void insertAll(List<WebApp> webApp);

    @Query("DELETE FROM web_app_table")
    void deleteAllWebApp();

    @Transaction
    default void replaceAll(List<WebApp> webApps) {
        deleteAllWebApp();
        insertAll(webApps);
    }

    @Query("SELECT * FROM web_app_table where LOWER(languageInEnglishName) = LOWER(:selectedLanguage) ORDER BY appId ASC")
    LiveData<List<WebApp>> getSelectedlanguageWebApps(String selectedLanguage);

    @Query("SELECT * FROM web_app_table  ORDER BY appId ASC")
    LiveData<List<WebApp>> getAllWebApp();

    @Query("SELECT languageInEnglishName FROM web_app_table")
    LiveData<List<String>> getAllLanguagesInEnglish();
}
