const Blog15Img = new Proxy({"src":"/_astro/blog15.BD697yYT.jpg","width":740,"height":541,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/workspaces/vanchuhut-branch2/src/assets/blogImages/blog15.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/workspaces/vanchuhut-branch2/src/assets/blogImages/blog15.jpg");
							return target[name];
						}
					});

export { Blog15Img as B };
