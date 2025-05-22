module.exports = {
  inputDir: 'src', // Write all your vanilla content here
  outputDir: 'dist', // This is where the converted files will be created
  dontFlatten: false, // Keep combinator selectors rather than BEM-style flattening
  useIDs: false, // Use IDs (1, 2, 3, 4) instead of hash (3d0ccd)
  dontHashFirst: false, // The first scope of a certain type doesn't get an ID or hash
  mergeCss: true, // Merge all the CSS into one style.css
  writeRuntimeMap: true, // Write the map needed for runtime auto-BEM
  copyImgsAndJs: true, // Copy images and JS files to the output folder
  shortenPath: true, // Shorten selectors to the shortest unique paths possible
  contextSymbol: ':', // Stop the path shortener from affecting content with this symbol in class
  scanIDs: false, // Scan team files for usage and only enable hash/ID if module name is already used
  stripClasses: true, //Strip classes that are never targetted with CSS.
  overrideConfig: {},
};
