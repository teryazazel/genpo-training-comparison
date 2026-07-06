// ─────────────────────────────────────────────────────────────
// Firebase config — reuses the existing CBTA project cbta-schedule-49812
// (same project already used by the schedule-app; this tool just adds
// its own Firestore collection: "genpo_training")
// This value is client-side and safe to expose — real security lives in
// Firestore Rules (see ../firestore.rules), which already allow
// read/write on all collections in this project via the shared link.
// ─────────────────────────────────────────────────────────────

export const firebaseConfig = {
  apiKey: "AIzaSyDS_HbAzzrwOA5UhCL2SBhAmQJYq6UYCb8",
  authDomain: "cbta-schedule-49812.firebaseapp.com",
  projectId: "cbta-schedule-49812",
  storageBucket: "cbta-schedule-49812.firebasestorage.app",
  messagingSenderId: "493788057098",
  appId: "1:493788057098:web:4c671a708233689e4e99f3",
  measurementId: "G-8HPYWXM798"
};
