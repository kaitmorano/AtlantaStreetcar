﻿define(
	 ({
		builder: {
			layouts: {
				mainStage: "Pagrindinė sritis",
				sideTitle: "Šoninis skydelis",
				sideDescr: "Maketas, skirtas pasakojimui, kuriame daug teksto, iliustruoto nuotraukų, vaizdų ir žemėlapių deriniu, skirtu žiniai perteikti.",
				floatTitle: "Slankusis skydelis",
				floatDescr: "Maketas, kuriame akcentuojama kartografija, o skaidrus trumpo teksto skydelis padeda perteikti pasakojimą."
			},
			common: {
				lblStatus1: "Publikuota",
				lblStatus2: "Juodraštis",
				lblStatus3: "Paslėptas"
			},
			settingsLayoutOptions: {
				title: "Maketo parinktys",
				cfgLeft: "Kairė",
				cfgRight: "Dešinė",
				cfgSmall: "Mažas",
				cfgMedium: "Vidutinis",
				cfgLarge: "Didelis",
				socialLinksLabel: "Kiekvienos skilties apačioje rodomos bendrinimo nuorodos",
				socialLinksDescr: "Skaitytojai gali nurodyti ir reklamuoti konkrečias jūsų %TPL_NAME% skiltis. Pvz., jei naudojate skilties bendrinimo piktogramą, skaitytojai bus nukreipti į konkrečią %TPL_NAME% skiltį, o ne į pasakojimo pradžią. Be to, skaitytojai gali naudoti pavadinimo skiltyje pateiktą socialinių tinklų nuorodą ir reklamuoti visą %TPL_NAME% (antraštės skirtukas), jie bus nukreipti į %TPL_NAME% pradžią."
			},
			initPopup: {
				title: "Sveiki atvykę"
			},
			addEditPopup: {
				disabled: "Parinktis Pridėti skiltį išjungta, nes pasiektas maksimalus leistinų skilčių skaičius.",
				titleAdd: "Pridėti skiltį",
				titleAddHome: "Pagrindinės skilties pridėjimas",
				titleEdit: "Redaguoti skiltį",
				step: "Žingsnis",
				stepMainStageExplain: "Pagrindinės srities turinys",
				stepPanelExplain: "Turinys",
				stepMainStageNextTooltip: "Redaguokite skilties pavadinimą ir pasirinkite pagrindinės srities turinį",
				step2NextTooltip: "Įveskite skilties pavadinimą ir %LAYOUT-TYPE% turinį",
				stepNextTooltipNext: "pereiti į kitą žingsnį",
				stepNextTooltipAdd: "pridėti skiltį",
				firstAddExplain: "Ši pirma skiltis yra jūsų pagrindinė skiltis, galvokite apie ją kaip apie istorijos antraštinį puslapį. Pavadinimas, kurį ką tik nustatėte, bus rodomas dideliais šriftais.",
				firstAddLeanMore: "Sužinokite daugiau",
				titlePlaceholder: "Skilties pavadinimas..."
			},
			addEditViewText: {
				editorPlaceholder: "Čia pridėkite teksto, nuorodų ir mažų grafinių elementų.",
				editorActionsTitle: "Pagrindinės srities veiksmai",
				editorActionsHelpDescr: "Naudodami šiuos valdiklius kurkite nuorodas, pakeisiančias pagrindinę sritį. Pvz., galbūt norėsite, kad kai skaitytojas paspaus nuorodą, pasikeistų žemėlapio mastelis ir būtų rodoma konkreti vieta, kitas interneto žemėlapis ar vaizdas."
			},
			organizePopup: {
				title: "Tvarkyti",
				lblHeader: "Nuvilkite skiltis į norimas vietas ir sutvarkykite turinį.",
				lblColTitle: "Pavadinimas",
				lblColPubDate: "Publikavimo data",
				lblColStatus: "Būsena",
				checkDisplayReverse: "Rodyti skiltis atvirkštine tvarka",
				btnApplyWarning: "Patvirtinkite %NB% skilčių panaikinimą",
				deleteTooltip: "Pašalinti",
				firstSectionExplain: "(Pagrindinės skilties perkelti negalima)"
			},
			exportData: {
				btn: "Eksportuoti turinį",
				tooltip: "Eksportavę turinį galėsite peržiūrėti žurnalą ir sukurti jo atsarginę kopiją, jei netyčia žurnalą ištrintumėte. Tiesiog puslapio turinį nukopijuokite ir įklijuokite į bet kurią teksto apdorojimo programą."
			},
			help: {
				lblHelp: "Pagalba",
				lblAdd: "Pridėti skiltį",
				lblSettings: "Nuostatos",
				lblOrga: "Tvarkyti turinį",
				lblEdit: "Pakeitimai",
				lblPublish: "Bendrinti",
				lblTips: "Patarimai",
				lblMore: "Norite daugiau?",
				lblLink: "Apsilankykite pristatomųjų žemėlapių svetainėje.",
				content1Div1: "Kurdami pasakojimą galite integruoti įvairius stilius. Paprastai <strong>%LAYOUT_TITLE%</strong> pateikiami tekstas, vaizdai ir video, o žemėlapiai dažniausiai būna <strong>pagrindinėje srityje</strong>. Tačiau, naudodami %TPL_NAME%, ir pagrindinėje srityje galite pridėti vaizdų, diagramų ir video.",
				content1Div2: "Pridėdami skilčių galite labai įvairiai adaptuoti savo pasakojimą. Kai skaitytojai slinks %LAYOUT_TITLE% tekstu, gali būti prastumiamas pagrindinėje srityje esantis žemėlapis ir keičiamas jo mastelis, kad būtų rodomi pagrindiniai taškai arba gali būti automatiškai perjungiami nauji žemėlapiai ir vaizdai, sustiprinantys jūsų pasakojimo įspūdį.",
				content2Div1: "Čia galite koreguoti, kaip atrodys %TPL_NAME%. Čia priderinamos spalvų schemos, maketai ir pločiai.",
				content2Div2: "Be to, galite pridėti Facebook, Twitter ir Bitly bendrinimo nuorodas, kad skaitytojai galėtų lengvai išplatinti %TPL_NAME% kitiems.",
				content3Div1: "Turinys tvarkomas dalijant į skiltis. Gali būti kiek tik norite skilčių (galvokite apie jas, kaip apie mažus skyrius). Svarbi šių skyrių seka; dalyje Tvarkymas galite keisti skilčių išdėstymo tvarką arba jas panaikinti, kaip norite.",
				content4Div1: "Radote klaidą ar norite pakeisti duomenis? Nesirūpinkite. Norėdami pakeisti turinį, ieškokite aplikacijos redagavimo piktogramos. Kurdami %TPL_NAME% daug kartų naudosite redagavimo funkcijas!",
				content5Div1: "%TPL_NAME% išsaugomas %PORTAL% paskyroje ir pagal numatytuosius nustatymus yra privatus. Galite nuspręsti, ar bendrinti jį organizacijoje, ar pateikti visam pasauliui. Kad galėtumėte lengvai bendrinti, mes netgi pateikiame sutrumpintą URL.",
				content6Div1: "Pagrindinės skilties pavadinimas yra ir žurnalo pavadinimas; galvokite apie pagrindinę skiltį kaip apie istorijos antraštinį puslapį. Kai skaitytojai naršys žurnalą, pagrindinės skilties pavadinimas išliks matomas.",
				content6Div2: "%LAYOUT_TITLE% nebūtinai turi būti tik tekstas. Galbūt verta pridėti nuotraukų ir vaizdo įrašų, kad istorija taptų gyvesnė ir suskaidytų ilgas teksto skiltis!"
			},
			landing: {
				lblAdd: "Kaip norite pavadinti žemėlapių žurnalą?",
				phAdd: "Įveskite pavadinimą...",
				lblOR: "Arba",
				lblHelp: "Susipažinkite"
			},
			firstAddSplash: {
				thisis: "Tai yra"
			}
        }
    })

);
