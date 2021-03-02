// Set a max depth levels to display full variables on kint
// without getting a timeout (white screen of death)
// Affects calls both on php code and on twig files.
if (class_exists('Kint')) {
  // Set the max_depth to prevent out-of-memory.
  \Kint::$max_depth = 4;
}