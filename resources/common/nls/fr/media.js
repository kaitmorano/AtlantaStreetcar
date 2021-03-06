﻿define(
	 ({
		commonMedia: {
			mediaSelector: {
				lblSelect1: "Support",
				lblSelect2: "Contenu",
				lblMap: "Carte",
				lblImage: "Image",
				lblVideo: "Vidéo",
				lblExternal: "Page Web",
				disabled: "Cette entité a été désactivée par l\'administrateur",
				url: "Pour entrer manuellement l\'adresse Web d\'une image",
				userLookup: "Charger des albums",
				notImplemented: "Fonction pas encore implémentée."
			},
			imageSelector: {
				lblStep1: "Choisir le service",
				lblStep2: "Sélectionner le support",
				lblStep3: "Configurer"
			},
			imageSelectorHome: {
				explain: "Chargez les images à partir des réseaux sociaux <br /> ou directement à partir d\'une URL"
			},
			imageSelectorFlickr: {
				userInputLbl: "Nom d\'utilisateur",
				signInMsg2: "Utilisateur introuvable",
				loadingFailed: "Echec du chargement"
			},
			imageSelectorFacebook: {
				leftHeader: "Utilisateur de Facebook",
				rightHeader: "Page Facebook",
				pageExplain: "Une page Facebook est une marque, une célébrité ou un produit public, comme <b>esrigis</b>. Vous pouvez obtenir le nom de la page après la première barre oblique inverse \'/\' de l\'URL de la page.",
				pageInputLbl: "Nom de page",
				lookupMsgError: "Page introuvable"
			},
			imageSelectorPicasa: {
				userInputLbl: "Adresse électronique ou identifiant Picasa/Google+",
				signInMsg2: "Compte introuvable",
				signInMsg3: "Pas d\'album public",
				howToFind: "Comment trouver un ID de compte Picasa ou Google+",
				howToFind2: "Copiez les chiffres compris entre la première et la deuxième barre oblique inverse \'/\' d\'une page Picasa ou G+"
			},
			videoSelectorCommon: {
				check: "Vérifier",
				notFound: "Vidéo introuvable",
				found: "Vidéo trouvée",
				select: "Sélectionner cette vidéo"
			},
			videoSelectorHome: {
				other: "Autre"
			},
			videoSelectorYoutube: {
				url: "URL d\'une vidéo Youtube",
				pageInputLbl: "Nom d\'utilisateur",
				lookupMsgError: "Utilisateur introuvable",
				howToFind: "Comment trouver un nom d\'utilisateur YouTube",
				howToFind2: "Le nom d\'utilisateur est affiché sous les vidéos",
				found: "Trouvé(e)",
				noData: "Aucune vidéo publique trouvée"
			},
			videoSelectorVimeo: {
				url: "URL d\'une vidéo Vimeo"
			},
			videoSelectorOther: {
				explain1: "Le journal cartographique ne peut pas lire de vidéos brutes (avi, mpeg), mais il peut lire les fichiers vidéo hébergés dans lesquels des lecteurs sont intégrés (YouTube ou Vimeo).",
				explain2: "La plupart des services d\'hébergement de vidéos en ligne offrent cette fonctionnalité. Vous devez trouver l\'option d\'incorporation de la vidéo, copier le code donné et utiliser la page %WEBPAGE%.",
				explain3: "Si vous souhaitez héberger la vidéo même, vous pouvez également créer une page HTML qui utilise un lecteur vidéo, tel que %EXAMPLE%, héberger cette page et également utiliser la page %WEBPAGE%.",
				webpage: "Page Web"
			},
			webpageSelectorHome: {
				lblUrl: "URL de la page Web",
				lblEmbed: "Code incorporé",
				lblOR: "OU",
				lblError1: "Erreur. Effacez un des deux champs en entrée.",
				lblError2: "Le code incorporé ne peut contenir qu\'un <iframe>"
			},
			mediaConfigure: {
				lblURL: "URL",
				lblURLPH: "L\'URL d\'une image doit commencer par http:// et se terminer par .jpg ou .png",
				lblLabel: "Légende de l\'image",
				lblLabel1: "Légende",
				lblLabel2: "Texte de pointage",
				lblLabel3: "Aucun",
				lblLabelPH: "Entrer du texte...",
				lblMaximize: "Inclure un bouton d\'agrandissement dans l\'angle de l\'image",
				lblMaximizeHelp: "Recommandé uniquement pour les photos de haute qualité",
				lblPosition: "Position",
				lblPosition1: "Centre",
				lblPosition2: "Remplissage",
				lblPosition3: "Ajuster",
				lblPosition4: "Etirer",
				lblPosition5: "Personnalisé",
				tooltipDimension: "La valeur peut être spécifiée en 'px' ou '%'",
				lblPosition2Explain: "(peut être rognée)",
				lblPosition3Explain: "(ne sera pas rognée)",
				lblPosition3Explain2: "(la largeur s\'adapte toujours au volet)",
				lblPosition4Explain: "(peut être déformée)"
			},
			editorActionGeocode: {
				lblTitle: "Localiser une adresse ou un lieu",
				mapMarkerExplain: "L\'utilisateur verra un symbole ponctuel cartographique en cliquant sur le lien"
			},
			editorActionMedia: {
				lblTitle: "Modifier le contenu de la grande scène"
			},
			editorInlineMedia: {
				lblTitle: "Insérer une image ou une vidéo"
			}
		}
	})

);
