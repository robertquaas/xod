
/**
 * An object representing single patch in a project
 * @typedef {Object} Patch
 */

/**
 * A {@link Patch} object or just its full path as a {@link string}
 * @typedef {(Patch|string)} PatchOrPath
 */

/**
 * @function createPatch
 * @param {string} path - full path of the patch, e.g. `"@/foo/bar"`
 * @returns {Patch} newly created patch
 */
// TODO: implement


/**
 * @function duplicatePatch
 * @param {string} newPath - full path of the new patch, e.g. `"@/foo/bar"`
 * @param {Patch} patch
 * @returns {Either<Error|Patch>} duplicated patch with new path or error
 */

/**
 * @function getPatchPath
 * @param {Patch} patch
 * @returns {Maybe<Null|string>}
 */

/**
 * @function getPatchBaseName
 * @param {Patch} patch
 * @returns {Maybe<Null|string>}
 */

/**
 * @function getPatchLabel
 * @param {Patch} patch
 * @returns {string}
 */

/**
 * @function setPatchLabel
 * @param {string} label
 * @param {Patch} patch
 * @returns {Patch} a copy of the `patch` with new label
 */

 /**
  * Returns a list of platforms for which a `patch` has native implementation
  *
  * For example, `['js', 'arduino', 'espruino', 'nodejs']`.
  *
  * @function listPatchPlatforms
  * @param {Patch} patch
  * @returns {string[]}
  */

/**
 * @function isPatchLocal
 * @param {Patch} patch
 * @returns {boolean}
 */

/**
 * @function isPatchLibrary
 * @param {Patch} patch
 * @returns {boolean}
 */

/**
 * @function getPatchTerminals
 * @param {Patch} patch
 * @returns {Node[]}
 */
 // TODO: implement

// =============================================================================
//
// Nodes
//
// =============================================================================

/**
 * @function listNodes
 * @param {Patch} patch - a patch to get nodes from
 * @returns {Node[]} list of all nodes not sorted in any arbitrary order
 */
// TODO: implement

/**
 * @function getNodeById
 * @param {string} id - node ID to find
 * @param {Patch} patch - a patch where node should be searched
 * @returns {Maybe<Null|Node>} a node with given ID or `undefined` if it wasn’t not found
 */
// TODO: implement

/**
 * Replaces a node with new one or inserts new one if it doesn’t exist yet.
 *
 * The node is searched by ID and its state
 * subtree is completely replaced with one given as argument.
 *
 * It’s up to you to keep the state integrity affected by the replacement.
 *
 * @function assocNode
 * @param {Node} node - new node
 * @param {Patch} patch - a patch with the `node`
 * @returns {Patch} a copy of the `patch` with the node replaced
 */
// TODO: implement

/**
 * Removes the `node` from the `patch`.
 *
 * Does nothing if the `node` is not in the `patch`.
 *
 * Also removes all links associated with the `node`.
 *
 * @function dissocNode
 * @param {NodeOrId} node - node to delete
 * @param {Patch} patch - a patch where the node should be deleted
 * @returns {Patch} a copy of the `patch` with the node deleted
 */
// TODO: implement


// =============================================================================
//
// Links
//
// =============================================================================

/**
 * @function listLinks
 * @param {Patch} patch - a patch to operate on
 * @returns {Link[]} list of all links not sorted in any arbitrary order
 */
// TODO: implement

/**
 * @function getLinkById
 * @param {string} id - a link ID to find
 * @param {Patch} patch - a patch to operate on
 * @returns {Maybe<Null|Link>} a link with given `id` or Null if not found
 */
// TODO: implement

/**
 * Checks if the `link` would be valid on the `patch`. I.e. it could be
 * [associated](@link assocLink) with it.
 *
 * The link is considered invalid in eiter case:
 * - the link is put on two inputs or on two outputs;
 * - a pin does not exists;
 * - the input already has another incoming link;
 *
 * @function validateLink
 * @param {Link} link - a link to validate
 * @param {Patch} patch - a patch to operate on
 * @returns {Either<Error|Link>} validation errors or valid {@link Link}
 */
// TODO: implement

/**
 * Replaces an existing `link` or inserts new one in the `patch`.
 *
 * Matching is done by link’s ID.
 *
 * @function assocLink
 * @param {Link} link - new link
 * @param {Patch} patch - a patch to operate on
 * @returns {Either<Error|Patch>} error or a copy of the `patch` with changes applied
 * @see {@link validateLink}
 */
// TODO: implement

/**
 * Removes the `link` from the `patch`.
 *
 * Does nothing if the `link` is not found in the patch.
 *
 * @function dissocLink
 * @param {LinkOrId} link - a link to remove
 * @param {Patch} patch - a patch to operate on
 * @returns {Patch} a copy of the `patch` with changes applied
 */
// TODO: implement
