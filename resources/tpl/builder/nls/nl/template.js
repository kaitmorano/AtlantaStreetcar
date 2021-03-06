﻿define(
	 ({
		builder: {
			layouts: {
				mainStage: "Hoofdvenster",
				sideTitle: "Zijvenster",
				sideDescr: "Een lay-out voor een verhaal met veel tekst die uw foto\'s, video\'s en kaarten op een prachtige manier combineert in een heldere boodschap.",
				floatTitle: "Zwevend venster",
				floatDescr: "Een lay-out die uw cartografie benadrukt en ruimte laat voor een transparant venster met een korte tekst om het verhaal te vertellen."
			},
			common: {
				lblStatus1: "Gepubliceerd",
				lblStatus2: "Concept",
				lblStatus3: "Verborgen"
			},
			settingsLayoutOptions: {
				title: "Lay-outopties",
				cfgLeft: "Links",
				cfgRight: "Rechts",
				cfgSmall: "Klein",
				cfgMedium: "Middel",
				cfgLarge: "Groot",
				socialLinksLabel: "Koppelingen om te delen weergeven onder aan elke sectie",
				socialLinksDescr: "Hiermee kunnen lezers verwijzen naar specifieke secties van uw %TPL_NAME% en deze promoten. Als u bijvoorbeeld een pictogram voor het delen van secties gebruikt, worden lezers naar die specifieke %TPL_NAME%-sectie gebracht in plaats van naar het begin van uw verhaal. Uw lezers kunnen de sociale-mediakoppeling in de titelsectie gebruiken om uw volledige %TPL_NAME% (tabblad Koptekst) te promoten en naar het begin van de %TPL_NAME% te worden gebracht."
			},
			initPopup: {
				title: "Welkom bij"
			},
			addEditPopup: {
				disabled: "Sectie toevoegen is uitgeschakeld, omdat het maximaal toegestane aantal secties is bereikt.",
				titleAdd: "Sectie toevoegen",
				titleAddHome: "Home-sectie toevoegen",
				titleEdit: "Sectie bewerken",
				step: "Stap",
				stepMainStageExplain: "Inhoud van het hoofdvenster",
				stepPanelExplain: "Content",
				stepMainStageNextTooltip: "Voer de sectietitel in en selecteer de inhoud van het hoofdvenster",
				step2NextTooltip: "Voer de sectietitel en inhoud van %LAYOUT-TYPE% in",
				stepNextTooltipNext: "om naar de volgende stap te gaan",
				stepNextTooltipAdd: "om de sectie toe te voegen",
				firstAddExplain: "De eerste sectie is uw Home-sectie. Zie dit als de coverpagina van uw verhaal. De zojuist door u gedefinieerde titel wordt in een groot lettertype weergegeven.",
				firstAddLeanMore: "Meer informatie",
				titlePlaceholder: "Sectietitel..."
			},
			addEditViewText: {
				editorPlaceholder: "Voeg hier tekst, koppelingen en kleine afbeeldingen toe.",
				editorActionsTitle: "Acties van hoofdvenster",
				editorActionsHelpDescr: "Gebruik deze bedieningselementen om koppelingen te maken die het hoofdvenster zullen wijzigen. Als de lezer bijvoorbeeld op een koppeling klikt, kunt u op de kaart zoomen naar een specifieke locatie, een andere webmap weergeven of een afbeelding weergeven."
			},
			organizePopup: {
				title: "Rangschikken",
				lblHeader: "Gebruik slepen en neerzetten voor de secties om uw inhoud te ordenen.",
				lblColTitle: "Titel",
				lblColPubDate: "Publicatiedatum",
				lblColStatus: "Status",
				checkDisplayReverse: "Secties in omgekeerde volgorde weergeven",
				btnApplyWarning: "Verwijderen van %NB% secties bevestigen",
				deleteTooltip: "Verwijderen",
				firstSectionExplain: "(De sectie Home kan niet worden verplaatst)"
			},
			exportData: {
				btn: "Inhoud exporteren",
				tooltip: "Door uw inhoud te exporteren kunt u een back-up van uw Journaal maken en bekijken als u deze per ongeluk verwijdert. Kopieer en plak de inhoud van de pagina simpelweg in een tekstverwerker."
			},
			help: {
				lblHelp: "Help",
				lblAdd: "Sectie toevoegen",
				lblSettings: "Instellingen",
				lblOrga: "Inhoud ordenen",
				lblEdit: "Bewerkingen",
				lblPublish: "Delen",
				lblTips: "Tips",
				lblMore: "Wilt u meer?",
				lblLink: "Ga naar de website met kaartverhalen.",
				content1Div1: "U kunt verschillende stijlen integreren wanneer u uw verhaal opbouwt. De <strong>%LAYOUT_TITLE%</strong> bevat doorgaans uw tekst, afbeeldingen en video terwijl uw kaarten gewoonlijk op het <strong>Hoofdvenster</strong> staan. Met de %TPL_NAME% kunt u echter ook afbeeldingen, diagrammen en video opnemen in het hoofdvenster.",
				content1Div2: "Door secties toe te voegen, kunt u de manier waarop u uw verhaal vertelt echt aanpassen. Wanneer lezers door uw %LAYOUT_TITLE%-tekst bladeren, kan een kaart op het hoofdvenster pannen of zoomen naar belangrijke punten of kunnen nieuwe kaarten en afbeeldingen automatisch worden in- en uitgeschakeld om uw boodschap te ondersteunen.",
				content2Div1: "Hier kunt u aanpassen hoe uw %TPL_NAME% eruitziet. Kleurenschema\'s, lay-outs en breedtes kunnen hier worden verfijnd.",
				content2Div2: "U kunt ook koppelingen om te delen naar Facebook, Twitter en Bitly toevoegen, zodat lezers uw %TPL_NAME% gemakkelijk met anderen kunnen delen.",
				content3Div1: "Uw inhoud wordt geordend in secties. U kunt zoveel secties hebben als u maar wilt (beschouw deze als kleine hoofdstukken). De volgorde van deze hoofdstukken is belangrijk; binnen Rangschikken kunt u de secties opnieuw ordenen of verwijderen zoals u dat wilt.",
				content4Div1: "Hebt u een fout gevonden of wilt u uw materiaal wijzigen? Geen probleem. Zoek naar het bewerkingspictogram dat overal in de app beschikbaar is om wijzigingen in uw inhoud door te voeren. U zult de bewerkingsfuncties vaak gebruiken wanneer u uw %TPL_NAME% ontwikkelt.",
				content5Div1: "Uw %TPL_NAME% wordt opgeslagen op uw %PORTAL%-account en is standaard privé. U kunt beslissen om dit met uw organisatie te delen of met de hele wereld. We bieden u zelfs een verkorte URL zodat het delen nog makkelijker gaat.",
				content6Div1: "De titel van uw sectie Home is tevens de titel van uw Journaal; beschouw uw sectie Home als de 'voorpagina' van uw verhaal. De titel van de Home-sectie blijft zichtbaar als uw lezers door het Journal bladeren.",
				content6Div2: "Uw %LAYOUT_TITLE% hoeft niet alleen maar uit tekst te bestaan, maar overweeg om foto\'s en video\'s bij te sluiten om het verhaal tot leven te brengen, en om lange stukken tekst te onderbreken!"
			},
			landing: {
				lblAdd: "Hoe wilt u uw Kaartjournaal noemen?",
				phAdd: "Voer de titel in...",
				lblOR: "Of",
				lblHelp: "Volg een rondleiding"
			},
			firstAddSplash: {
				thisis: "Dit is het"
			}
        }
    })

);
