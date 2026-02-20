const Blog6Img = new Proxy({"src":"/_astro/blog6.C6E8hfdi.webp","width":768,"height":772,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/workspaces/vanchuhut-branch2/src/assets/blogImages/blog6.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/workspaces/vanchuhut-branch2/src/assets/blogImages/blog6.webp");
							return target[name];
						}
					});

export { Blog6Img as B };
