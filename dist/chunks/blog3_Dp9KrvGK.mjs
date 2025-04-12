const Blog3Img = new Proxy({"src":"/_astro/blog3.CzNYA93T.webp","width":394,"height":394,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/workspaces/vanchuhut-branch2/src/assets/blogImages/blog3.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/workspaces/vanchuhut-branch2/src/assets/blogImages/blog3.webp");
							return target[name];
						}
					});

export { Blog3Img as B };
