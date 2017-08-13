var siteName = 0,
	typeOfSite = 1,
	registration = 2;

var filterData = {
	"header" : ["Site name","Type of site","Registration"],
	"data" : [
		["16WMPO.com","Imposter site","Scottsdale, Ariz. **"],
		["24online.news","Imposter site","Panama, Pa. **"],
		["24wpn.com","Fake news","Veles, Macedonia"],
		["247NewsMedia.com","Fake news","Kumanovo, Macedonia"],
		["ABCNews.com.co","Imposter site","Phoenix, Ariz."],
		["actualidadpanamericana.com","Parody site","Scottsdale, Ariz. **"],
		["AlabamaObserver.com","Imposter site","Toronto, Canada!!!"],
		["AmericanFlavor.news","Fake news","Panama, Pa.*"],
		["AmericanPeopleNetwork.com","Fake news","Veles, Macedonia"],
		["AmericanPoliticNews.co","Fake news","Came up as available for use"],
		["AmericanPresident.co","Fake news","Tblisi, Georgia"],
		["AMPosts.com","Fake news","Chesterbrook, Pa. ^"],
		["ANews24.org\u002F","Fake news","Panama, Pa. *"],
		["AngryPatriotMovement.com","Fake news","Scottsdale, Ariz. **"],
		["Anonjekloy.tk","Fake news","Amsterdam, Netherlands"],
		["AssociatedMediaCoverage.com","Parody site","Scottsdale, Ariz. **"],
		["Aurora-News.us","Imposter site","Santiago, Chile"],
		["BB4SP.com","Fake news","Midwest City, Okla."],
		["BeforeItsNews.com","Fake news","Scottsdale, Ariz. **"],
		["BlackInsuranceNews.com","Some fake stories","Ridgefield Park, N.J."],
		["BlueVision.news","Fake news","Panama, Pa. *"],
		["BlueVisionPost.com","Fake news","Panama, Pa. *"],
		["BostonLeader.com","Parody site","Toronto, Canada !!!"],
		["BostonTribune.com","Parody site","Scottsdale, Ariz. **"],
		["BuzzFeedUSA.com","Fake news","Scottsdale, Ariz. **"],
		["CannaSOS.com","Some fake stories","Scottsdale, Ariz. **"],
		["Channel18News.com","Imposter site","Scottsdale, Ariz. **"],
		["ChristianTimesNewspaper.com","Imposter site","Scottsdale, Ariz. **"],
		["ChristianToday.info","Fake news","Scottsdale, Ariz. **"],
		["CivicTribune.com","Fake news","Scottsdale, Ariz. **"],
		["CivicTribune.com","Imposter site","Scottsdale, Ariz. **"],
		["ClashDaily.com","Fake news","Scottsdale, Ariz. **"],
		["CNNews3.com","Imposter site","Scottsdale, Ariz. **"],
		["Coed.com","Some fake stories","New York, N.Y."],
		["ConservativeDailyPost.com","Fake news","Panama, Pa. *"],
		["ConservativeFlashNews.com","Fake news","Panama, Pa.*"],
		["ConservativeInfoCorner.com","Fake news","Came up as available for use"],
		["ConservativeSpirit.com","Fake news","Chesterbrook, Pa.^"],
		["DailyInfoBox.com","Fake news","Panama, Pa.*"],
		["DailyNews10.com","Imposter site","Scottsdale, Ariz. **"],
		["DailyNews5.com","Imposter site","Scottsdale, Ariz. **"],
		["DailyNewsPosts.info","Fake news","Chesterbrook, Pa ^"],
		["DailySnark.com","Parody site","Scottsdale, Ariz. **"],
		["DailySurge.com","Fake news","Alexandria, Va."],
		["DailyUSAUpdate.com","Fake news","Scottsdale, Ariz. **"],
		["DamnLeaks.com","Fake news","Colorado Springs, Colo. "],
		["DemocraticMoms.com","Fake news","Panama, Pa. *"],
		["DenverInquirer.com","Imposter site","Toronto, Canada !!!"],
		["DepartedMedia.com","Fake news","Chesterbrook, Pa.^"],
		["Disclose.tv","Fake news","Passau, Germany"],
		["DIYHours.net","Fake news","Panama, Pa.*"],
		["DonaldTrumpPOTUS45.com","Fake news","Free Union, Va."],
		["EmpireHerald.com","Imposter site","Scottsdale, Ariz. **"],
		["EmpireNews.net","Parody site","Chesterbrook, Pa ^"],
		["EmpireSports.co","Parody site","Sellersburg, IN"],
		["En-Volve.com","Fake news","Chesterbrook, Pa. ^"],
		["ENHLive.com","Fake news","Brea, Calif. !!"],
		["FederalistTribune.com","Fake news","Brea, Calif. !!"],
		["FedsAlert.com","Fake news","Scottsdale, Ariz. **"],
		["FirstPost.com","Some fake stories","Mumbai, India"],
		["FlashNewsCorner.com","Fake news","Panama, Pa.*"],
		["FloridaSunPost.com","Parody site","Toronto, Canada !!!"],
		["FocusNews.info","Fake news","Scottsdale, Ariz. **"],
		["Fox-News24.com","Imposter site","Scottsdale, Ariz. **"],
		["FreedomDaily.com","Fake news","Scottsdale, Ariz. **"],
		["FreedomCrossroads.us","Fake news","North Waterboro, Me."],
		["FreedomsFinalStand.com","Fake news","Scottsdale, Ariz. **"],
		["FreeWoodPost.com","Parody site","Scottsdale, Ariz. **"],
		["FreshDailyReport.com","Fake news","Veles, Macedonia"],
		["GiveMeLiberty01.com","Fake news","Scottsdale, Ariz. **"],
		["GlobalPoliticsNow.com","Fake news","Kumanovo, Macedonia"],
		["GummyPost.com","Fake news","Scottsdale, Ariz. **"],
		["HealthyCareAndBeauty.com","Some fake stories","Berlin, Germany"],
		["HealthyWorldHouse.com","Fake news","Kumanovo, Macedonia"],
		["HoustonChronicle-TV.com","Imposter site","Scottsdale, Ariz. **"],
		["ILoveNativeAmericans.us","Some fake stories","Kosovo, Serbia"],
		["InterestingDailyNews.com","Fake news","Orem, Utah~"],
		["IsThatLegit.com","Fake news","Toronto, Canada !!!"],
		["JewsNews.co.il","Some fake stories","Shiloh, Israel"],
		["KMT11.com","Imposter site","Scottsdale, Ariz. **"],
		["Konkonsagh.biz","Fake news","Ashanti, Ghana"],
		["KY12News.com","Imposter site","Scottsdale, Ariz. **"],
		["LadyLibertysNews.com","Fake news","Kirkland, Wash.***"],
		["LastDeplorables.com","Fake news","Scottsdale, Ariz. **"],
		["LearnProgress.org","Some fake stories","Scottsdale, Ariz. **"],
		["Liberty-Courier.com","Fake news","Orem, Utah~"],
		["LiberalPlug.com","Fake news","Scottsdale, Ariz. **"],
		["LibertyAlliance.com","Fake news","Dallas, Ga. "],
		["Local31News.com","Imposter site","Scottsdale, Ariz. **"],
		["MadWorldNews.com","Fake news","Scottsdale, Ariz. **"],
		["MajorThoughts.com","Fake news","Sunrise, Fla. "],
		["Mentor2day.com","Some fake stories","Scottsdale, Ariz. **"],
		["MetropolitanWorlds.com","Fake news","Accra, Ghana"],
		["MIssissippiHerald.com","Imposter site","Toronto, Canada !!!"],
		["NationalReport.net","Parody site","Scottsdale, Ariz. **"],
		["NativeAmericans.us","Some fake stories","Cary, N.C."],
		["NBC.com.co","Imposter site","Phoenix, Ariz."],
		["NeonNettle.com","Fake news","Toronto, Canada !!!"],
		["Nephef.com","Fake news","Panama, Pa.*"],
		["NewPoliticsToday.com","Fake news","Kumanovo, Macedonia"],
		["News4KTLA.com","Imposter site","Scottsdale, Ariz. **"],
		["NewsBreaksHere.com","Fake news","Chesterbrook, Pa.^"],
		["NewsBreakingsPipe.com","Fake news","Limassol, Cyprus"],
		["NewsBySquad.com","Fake news","Panama, Pa. *"],
		["NewsDaily12.com","Imposter site","Scottsdale, Ariz. **"],
		["NewsExaminer.net","Fake news","Nobby Beach, Australia !!"],
		["NewsLeak.co","Fake news","Tblisi, Georgia"],
		["Newslo.com","Parody site","Thessaloniki, Greece"],
		["NewsJustForYou1.blogspot.com","Fake news","Mountain View, Calif."],
		["NewzMagazine.com","Fake news","Scottsdale, Ariz. **"],
		["NotAllowedTo.com","Fake news","https:\u002F\u002Fwww.whois.com\u002Fwhois\u002Fnotallowedto.com"],
		["Now8News.com","Imposter site","Scottsdale, Ariz. **"],
		["OccupyDemocrats.com","Fake news","Langhorne, Pa. "],
		["OnePoliticalPlaza.com","Fake news","Miami, Fla.^^^"],
		["OpenMagazines.com","Fake news","Scottsdale, Ariz. **"],
		["Politicalo.com","Parody site","Jerusalem, Israel"],
		["Politicass.com","Parody site","Jerusalem, Israel"],
		["Politicono.com","Parody site","Jerusalem, Israel"],
		["Politicops.com","Parody site","Jerusalem, Israel"],
		["Politicot.com","Parody site","Jerusalem, Israel"],
		["PoliticsUSANews.com","Fake news","Panama, Pa.*"],
		["President45DonaldTrump.com","Fake news","Burlington, Mass. ~"],
		["Prntly.com","Fake news","Nobby Beach, Australia !!"],
		["ProudLeader.com","Fake news","North Waterboro, Me."],
		["ReadConservatives.news","Fake news","Kirkland, Wash.***"],
		["RealNewsRightNow.com","Parody site","Los Angeles, Calif."],
		["RedCountry.us","Fake news","Veles, Macedonia"],
		["RedInfo.us","Fake news","Veles, Macedonia"],
		["RedRockTribune.com","Imposter site","Scottsdale, Ariz. **"],
		["Religionlo.com","Parody site","Jerusalem, Israel"],
		["ReligionMind.com","Fake news","Balangoda, Sri Lanka"],
		["Rogue-Nation3.com","Fake news","Quebec, Canada"],
		["RumorJournal.com","Fake news","Panama, Pa. *"],
		["SatiraTribune.com","Parody site","Scottsdale, Ariz. **"],
		["Smag31.com","Some fake stories","Dundalk, Ireland"],
		["SocialEverythings.com","Fake news","Mahawela, Sri Lanka"],
		["SouthernConservativeExtra.com","Fake news","Came up as available for use"],
		["Spinzon.com","Fake news","Panama, Pa. *"],
		["States-TV.com","Fake news","Scottsdale, Ariz. **"],
		["Success-Street.com","Fake news","Kumanovo, Macedonia"],
		["SupremePatriot.com","Fake news","Panama, Pa. *"],
		["TDTAlliance.com","Fake news","Scottsdale, Ariz. **"],
		["TeaParty.org","Some fake stories","Laguna Woods, Calif."],
		["ThatViralFeed.net","Some fake stories","Denver, Colo."],
		["The-Insider.co","Fake news","Scottsdale, Ariz. **"],
		["ThePremiumNews.com","Fake news","Panama, Pa. *"],
		["The-Postillon.com","Parody site","Roubaix, France"],
		["TheBigRiddle.com","Some fake stories","Scottsdale, Ariz. **"],
		["TheInternetPost.net","Fake news","Scottsdale, Ariz. **"],
		["TheLastLineOfDefense.org","Parody site","Scottsdale, Ariz. **"],
		["TheMoralOfTheStory.us","Fake news","Paradise, Calif."],
		["TheNationalMarijuanaNews.com","Some fake stories","Henderson, Nev."],
		["TheNet24h.com","Fake news","Brisbane, Australia"],
		["TheNewYorkEvening.com","Imposter site","Kumanovo, Macedonia"],
		["ThePoliticalInsider.com","Some fake stories","Scottsdale, Ariz. **"],
		["TheRightists.com","Parody site","Jerusalem, Israel"],
		["TheSeattleTribune.com","Parody site","Scottsdale, Ariz. **"],
		["TheTrumpMedia.com","Fake news","Scottsdale, Ariz. **"],
		["TheUSA-News.com","Fake news","Chesterbrook, Pa.^"],
		["TheUSAConservative.com","Fake news","Scottsdale, Ariz. **"],
		["TheWashingtonPress.com","Imposter site","Laurium, Mich. "],
		["Times.com.mx","Imposter site","Chesterbrook, Pa ^"],
		["TMZWorldNews.com","Fake news","Scottsdale, Ariz.**"],
		["TrueAmericans.me","Fake news","Chesterbrook, Pa. ^"],
		["TrueTrumpers.com","Fake news","Chesterbrook, Pa.^"],
		["UndergroundNewsReport.com","Fake news","Scottsdale, Ariz. **"],
		["UniversePolitics.com","Fake news","Veles, Macedonia"],
		["UrbanImageMagazine.com","Some fake stories","Marion, Indiana"],
		["USA-Radio.com","Fake news","Scottsdale, Ariz. **"],
		["USA-Television.com","Imposter site","Scottsdale, Ariz. **"],
		["USADailyInfo.com","Fake news","Panama *"],
		["USADailyPost.us","Fake news","Veles, Macedonia"],
		["USADailyTime.com","Fake news","Panama, Pa.*"],
		["USADoseNews.com","Fake news","Nobby Beach, Australia!!"],
		["USAFirstInformation.com","Fake news","Panama, Pa. *"],
		["USANews4U.us","Fake news","Veles, Virgin Islands"],
		["USANewsToday.com","Fake news","Scotts, Mich."],
		["USAPoliticsNow.com","Fake news","Nobby Beach, Australia !!"],
		["USAPolitics24hrs.com","Fake news","Nobby Beach, Australia !!"],
		["USAPoliticsToday.com","Fake news","Brea, Calif.^^"],
		["USAPoliticsZone.com","Fake news","Veles, Macedonia"],
		["USASnich.com","Fake news","Scottsdale, Ariz. **"],
		["USATodayNews.me","Imposter site","Chesterbrook, Pa ^"],
		["USAWorldBox.com","Fake news","Panama, Pa.^"],
		["USHealthyAdvisor.com","Fake news","Panama, Pa.*"],
		["USHealthyLife.com","Fake news","Panama, Pa.*"],
		["USHerald.com","Fake news","Austin, Texas"],
		["USInfoNews.com","Fake news","Veles, Macedonia"],
		["USANewsHome.com","Fake news","Scottsdale, Ariz. **"],
		["USPOLN.com","Fake news","Scottsdale, Ariz. **"],
		["USPostman.com","Fake news","Veles, Macedonia"],
		["ViralActions.com","Fake news","Scottsdale, Ariz. **"],
		["VoxTribune.com","Fake news","Scottsdale, Ariz. **"],
		["WashingtonEvening.com","Imposter site","Kumanovo, Macedonia"],
		["WashingtonFeed.com","Fake news","Vancouver, Canada "],
		["WashingtonPost.com.co","Imposter site","Washington, DC"],
		["WeConservative.com","Fake news","Veles, Macedonia"],
		["WeLoveNative.com","Some fake stories","Pristina, Kosovo"],
		["WorldNewsDailyReport.com","Parody site","Nobby Beach, Australia !!"],
		["WorldPoliticsNow.com","Fake news","Nassau, Bahamas!"]
	]
}
