package org.curiouslearning.allSA_maharishi.firebase;

import android.util.Log;

import com.google.firebase.firestore.DocumentSnapshot;
import com.google.firebase.firestore.FirebaseFirestore;

import java.util.HashMap;
import java.util.Map;

public class FirestoreUtils {

    private static final String TAG = "FirestoreUtils";
    private static final String COLLECTION_USERNAMES = "usernames";
    private static final String FIELD_PSEUDO_ID = "pseudoId";

    public interface OnNameCheckListener {
        void onResult(boolean isAvailable, boolean isOwnedByCurrentUser, String error);
    }

    public interface OnNameRegisteredListener {
        void onSuccess();
        void onFailure(String error);
    }

    /**
     * Checks if a name is available in Firestore.
     * A name is available if it doesn't exist OR if it's owned by the current pseudoId.
     */
    public static void checkNameAvailability(String name, String currentPseudoId, OnNameCheckListener listener) {
        FirebaseFirestore db = FirebaseFirestore.getInstance();
        
        db.collection(COLLECTION_USERNAMES).document(name.toLowerCase())
            .get()
            .addOnCompleteListener(task -> {
                if (task.isSuccessful()) {
                    DocumentSnapshot document = task.getResult();
                    if (document.exists()) {
                        String existingPseudoId = document.getString(FIELD_PSEUDO_ID);
                        boolean isOwnedByCurrentUser = currentPseudoId.equals(existingPseudoId);
                        listener.onResult(isOwnedByCurrentUser, isOwnedByCurrentUser, null);
                    } else {
                        // Document does not exist, name is available
                        listener.onResult(true, false, null);
                    }
                } else {
                    Log.e(TAG, "Error checking name availability", task.getException());
                    listener.onResult(false, false, task.getException().getMessage());
                }
            });
    }

    /**
     * Registers or updates a name in Firestore for the given pseudoId.
     */
    public static void registerName(String name, String pseudoId, OnNameRegisteredListener listener) {
        FirebaseFirestore db = FirebaseFirestore.getInstance();
        
        Map<String, Object> data = new HashMap<>();
        data.put(FIELD_PSEUDO_ID, pseudoId);
        data.put("updatedAt", System.currentTimeMillis());

        db.collection(COLLECTION_USERNAMES).document(name.toLowerCase())
            .set(data)
            .addOnSuccessListener(aVoid -> {
                Log.d(TAG, "Name registered successfully: " + name);
                listener.onSuccess();
            })
            .addOnFailureListener(e -> {
                Log.e(TAG, "Error registering name", e);
                listener.onFailure(e.getMessage());
            });
    }
}
