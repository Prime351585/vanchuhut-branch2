const Blog7Img = new Proxy({"src":"/_astro/blog7.BSRlJ4aj.webp","width":908,"height":652,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/workspaces/vanchuhut-branch2/src/assets/blogImages/blog7.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/workspaces/vanchuhut-branch2/src/assets/blogImages/blog7.webp");
							return target[name];
						}
					});

export { Blog7Img as B };
