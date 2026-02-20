const Blog14Img = new Proxy({"src":"/_astro/blog14.C9thya43.jpg","width":740,"height":740,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/workspaces/vanchuhut-branch2/src/assets/blogImages/blog14.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/workspaces/vanchuhut-branch2/src/assets/blogImages/blog14.jpg");
							return target[name];
						}
					});

export { Blog14Img as B };
