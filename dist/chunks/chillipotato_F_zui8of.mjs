const chillipotato = new Proxy({"src":"/_astro/chillipotato.zu8Xz7pL.webp","width":1080,"height":1080,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/workspaces/vanchuhut-branch2/src/assets/dishes/chillipotato.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/workspaces/vanchuhut-branch2/src/assets/dishes/chillipotato.webp");
							return target[name];
						}
					});

export { chillipotato as c };
