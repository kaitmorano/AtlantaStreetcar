﻿define(
	 ({
		builder: {
			layouts: {
				mainStage: "Galvenais posms",
				sideTitle: "Sānu panelis",
				sideDescr: "Izkārtojums ar tekstu bagātinātam stāstam, kurā skaidrā un precīzā ziņojumā ir profesionāli kombinēti fotoattēli, video un kartes.",
				floatTitle: "Peldošais panelis",
				floatDescr: "Izkārtojums, kas pievērš uzmanību jūsu kartogrāfijai, vienlaikus stāsta pavēstīšanai piedāvājot caurspīdīgu īsa formāta teksta paneli."
			},
			common: {
				lblStatus1: "Publicēts",
				lblStatus2: "Skice",
				lblStatus3: "Paslēpts"
			},
			settingsLayoutOptions: {
				title: "Izkārtojuma opcijas",
				cfgLeft: "Pa kreisi",
				cfgRight: "Pa labi",
				cfgSmall: "Mazs",
				cfgMedium: "Vidējs",
				cfgLarge: "Liels",
				socialLinksLabel: "Katras sadaļas apakšā parādīt koplietošanas saites",
				socialLinksDescr: "Tas sniedz lasītājiem iespēju veidot atsauces uz jūsu %TPL_NAME%, kā arī reklamēt konkrētas šī vienuma sadaļas. Piemēram, ja izmantosit sadaļu koplietošanas ikonu, lasītāji nokļūs šajā konkrētajā %TPL_NAME% sadaļā, nevis jūsu stāsta sākumā. Jūsu lasītāji var izmantot virsraksta sadaļā esošo sociālās multivides saiti, lai reklamētu visu jūsu %TPL_NAME% (galvenes cilne), kā arī varat veicināt viņu nokļūšanu %TPL_NAME% sākumā."
			},
			initPopup: {
				title: "Laipni lūdzam"
			},
			addEditPopup: {
				disabled: "Pievienot sadaļu ir atspējots, jo ir sasniegs maksimālais atļauto sadaļu skaits.",
				titleAdd: "Pievienot sadaļu",
				titleAddHome: "Sadaļas Mājas pievienošana",
				titleEdit: "Sadaļas rediģēšana",
				step: "Solis",
				stepMainStageExplain: "Galvenā posma saturs",
				stepPanelExplain: "Saturs",
				stepMainStageNextTooltip: "Ievadiet sadaļas virsrakstu un izvēlieties galvenā posma saturu",
				step2NextTooltip: "Ievadiet sadaļas virsrakstu un %LAYOUT-TYPE% saturu",
				stepNextTooltipNext: "lai pārietu uz nākamo soli",
				stepNextTooltipAdd: "lai pievienotu sadaļu",
				firstAddExplain: "Pirmā sadaļa ir sadaļa Mājas. Uztveriet to kā sava stāsta vāka lapu. Tikko norādītais virsraksts tiks attēlots lielā fontā.",
				firstAddLeanMore: "Uzzināt vairāk",
				titlePlaceholder: "Sadaļas virsraksts..."
			},
			addEditViewText: {
				editorPlaceholder: "Šeit pievienojiet tekstu, saites un maza izmēra grafikas.",
				editorActionsTitle: "Galvenā posma darbības",
				editorActionsHelpDescr: "Izmantojiet šīs vadīklas, lai izveidotu saites, kas tiks mainītas galvenajā posmā. Piemēram, kad lietotājs noklikšķinās uz saites, iespējams, vēlēsities mērogmainīt karti līdz konkrētam izvietojumam, parādīt citu web karti vai attēlu."
			},
			organizePopup: {
				title: "Organizēšana",
				lblHeader: "Velciet un nometiet stāstījuma sadaļas, lai organizētu saturu.",
				lblColTitle: "Virsraksts",
				lblColPubDate: "Publicēšanas datums",
				lblColStatus: "Statuss",
				checkDisplayReverse: "Parādīt sadaļas apgrieztā secībā",
				btnApplyWarning: "Apstipriniet %NB% sadaļu dzēšanu",
				deleteTooltip: "Dzēst",
				firstSectionExplain: "(Sākuma sadaļu nevar pārvietot)"
			},
			exportData: {
				btn: "Eksportēt saturu",
				tooltip: "Satura eksportēšana ļauj skatīt un izveidot sava žurnāla rezerves kopiju gadījumam, ja žurnālu nejauši izdzēšat. Vienkārši nokopējiet lapas saturu un ielīmējiet jebkurā teksta redaktorā."
			},
			help: {
				lblHelp: "Palīdzība",
				lblAdd: "Pievienot sadaļu",
				lblSettings: "Iestatījumi",
				lblOrga: "Organizēt saturu",
				lblEdit: "Rediģējumi",
				lblPublish: "Koplietošana",
				lblTips: "Padomi",
				lblMore: "Vai vēlaties uzzināt vairāk?",
				lblLink: "Apmeklējiet Story Maps web vietni.",
				content1Div1: "Veidojot stāstījumu, varat integrēt dažādus stilus. <strong>%LAYOUT_TITLE%</strong> parasti ir ietverts teksts, attēli un video, bet kartes parasti ir izvietotas <strong>galvenajā posmā</strong>. Tomēr %TPL_NAME% ļauj jums rādīt attēlus, diagrammas un video arī galvenajā posmā.",
				content1Div2: "Sadaļu pievienošana ļauj precīzi pielāgot stāstījuma iespējas. Kad lasītāji ritina jūsu tekstu %LAYOUT_TITLE%, karte galvenajā posmā var panoramēt vai tālummainīt līdz galvenajiem punktiem, vai jaunas kartes un attēlus var pārslēgt automātiski, lai atbalstītu jūsu ziņojumu.",
				content2Div1: "Šeit varat pielāgot sava %TPL_NAME% izskatu. Šeit tiek uzlabotas visas krāsu shēmas, izkārtojumi un platumi.",
				content2Div2: "Koplietošanas saites varat arī pievienot vietnēs Facebook, Twitter un Bitly, lai lasītāji varētu viegli pavēstīt par jūsu %TPL_NAME% citiem lietotājiem.",
				content3Div1: "Jūsu izveidotais saturs ir sakārtots sadaļās. Varat izveidot tik sadaļu, cik vēlaties (iedomājieties, ka tās ir nelielas nodaļas). Šo nodaļu plūsma ir svarīga, tāpēc, izmantojot kārtošanas funkciju, sadaļas varat pēc vajadzības pārkārtot vai dzēst.",
				content4Div1: "Atradāt kļūdu vai vēlaties mainīt savus materiālus? Tas ir viegli paveicams! Lai saturā veiktu izmaiņas, aplikācijā atrodiet rediģēšanas ikonu. Izstrādājot %TPL_NAME%, rediģēšanas funkciju nāksies bieži izmantot.",
				content5Div1: "Jūsu %TPL_NAME% ir saglabāts jūsu portāla %PORTAL% kontā un ir konfidenciāls pēc noklusējuma. Varat izvēlēties to kopīgot ar savu organizāciju vai padarīt pieejamu visiem lietotājiem. Mēs pat nodrošināsim jums saīsinātu vietrādi URL, lai koplietošana būtu vienkārša.",
				content6Div1: "Sadaļas Mājas virsraksts ir arī jūsu žurnāla virsraksts. Uztveriet sadaļu Mājas kā sava stāsta vāka lapu. Sadaļas Mājas virsraksts būs redzams arī tad, kad lietotāji pārvietosies žurnālā.",
				content6Div2: "%LAYOUT_TITLE% nav jābūt tikai tekstam, apsveriet iespēju iekļaut foto un video, lai stāstu padarītu dzīvāku un sadalītu sīkāk garas teksta sadaļas."
			},
			landing: {
				lblAdd: "Kā vēlaties nosaukt savu karšu žurnālu?",
				phAdd: "Ievadiet nosaukumu...",
				lblOR: "Vai",
				lblHelp: "Iepazīties"
			},
			firstAddSplash: {
				thisis: "Šis ir"
			}
        }
    })

);
