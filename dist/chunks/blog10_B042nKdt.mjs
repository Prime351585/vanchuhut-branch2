const Blog10Img = new Proxy({"src":"/_astro/blog10.DveiPDd5.webp","width":5711,"height":3703,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/workspaces/vanchuhut-branch2/src/assets/blogImages/blog10.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/workspaces/vanchuhut-branch2/src/assets/blogImages/blog10.webp");
							return target[name];
						}
					});

export { Blog10Img as B };
