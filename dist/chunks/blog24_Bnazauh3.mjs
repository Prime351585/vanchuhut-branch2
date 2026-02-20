const Blog24Img = new Proxy({"src":"/_astro/blog24.FwuRXyPq.webp","width":1366,"height":683,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/workspaces/vanchuhut-branch2/src/assets/blogImages/blog24.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/workspaces/vanchuhut-branch2/src/assets/blogImages/blog24.webp");
							return target[name];
						}
					});

export { Blog24Img as B };
