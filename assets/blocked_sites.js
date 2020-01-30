const defaultBlacklist = [
  {
    siteName: 'foo.com',
    typeOfSite: 'foo',
    registration: 'Earth'
  },
  {
    siteName: '16WMPO.com',
    typeOfSite: 'Imposter site',
    registration: 'Scottsdale, Ariz. **'
  },
  {
    siteName: '24online.news',
    typeOfSite: 'Imposter site',
    registration: 'Panama, Pa. **'
  },
  {
    siteName: '24wpn.com',
    typeOfSite: 'Fake news',
    registration: 'Veles, Macedonia'
  },
  {
    siteName: '247NewsMedia.com',
    typeOfSite: 'Fake news',
    registration: 'Kumanovo, Macedonia'
  },
  {
    siteName: 'ABCNews.com.co',
    typeOfSite: 'Imposter site',
    registration: 'Phoenix, Ariz.'
  },
  {
    siteName: 'actualidadpanamericana.com',
    typeOfSite: 'Parody site',
    registration: 'Scottsdale, Ariz. **'
  },
  {
    siteName: 'AlabamaObserver.com',
    typeOfSite: 'Imposter site',
    registration: 'Toronto, Canada!!!'
  },
  {
    siteName: 'AmericanFlavor.news',
    typeOfSite: 'Fake news',
    registration: 'Panama, Pa.*'
  },
  {
    siteName: 'AmericanPeopleNetwork.com',
    typeOfSite: 'Fake news',
    registration: 'Veles, Macedonia'
  },
  {
    siteName: 'AmericanPoliticNews.co',
    typeOfSite: 'Fake news',
    registration: 'Came up as available for use'
  },
  {
    siteName: 'AmericanPresident.co',
    typeOfSite: 'Fake news',
    registration: 'Tblisi, Georgia'
  },
  {
    siteName: 'AMPosts.com',
    typeOfSite: 'Fake news',
    registration: 'Chesterbrook, Pa. ^'
  },
  {
    siteName: 'ANews24.org',
    typeOfSite: 'Fake news',
    registration: 'Panama, Pa. *'
  },
  {
    siteName: 'AngryPatriotMovement.com',
    typeOfSite: 'Fake news',
    registration: 'Scottsdale, Ariz. **'
  },
  {
    siteName: 'Anonjekloy.tk',
    typeOfSite: 'Fake news',
    registration: 'Amsterdam, Netherlands'
  },
  {
    siteName: 'AssociatedMediaCoverage.com',
    typeOfSite: 'Parody site',
    registration: 'Scottsdale, Ariz. **'
  },
  {
    siteName: 'Aurora-News.us',
    typeOfSite: 'Imposter site',
    registration: 'Santiago, Chile'
  },
  {
    siteName: 'BB4SP.com',
    typeOfSite: 'Fake news',
    registration: 'Midwest City, Okla.'
  },
  {
    siteName: 'BeforeItsNews.com',
    typeOfSite: 'Fake news',
    registration: 'Scottsdale, Ariz. **'
  },
  {
    siteName: 'BlackInsuranceNews.com',
    typeOfSite: 'Some fake stories',
    registration: 'Ridgefield Park, N.J.'
  },
  {
    siteName: 'BlueVision.news',
    typeOfSite: 'Fake news',
    registration: 'Panama, Pa. *'
  },
  {
    siteName: 'BlueVisionPost.com',
    typeOfSite: 'Fake news',
    registration: 'Panama, Pa. *'
  },
  {
    siteName: 'BostonLeader.com',
    typeOfSite: 'Parody site',
    registration: 'Toronto, Canada !!!'
  },
  {
    siteName: 'BostonTribune.com',
    typeOfSite: 'Parody site',
    registration: 'Scottsdale, Ariz. **'
  },
  {
    siteName: 'BuzzFeedUSA.com',
    typeOfSite: 'Fake news',
    registration: 'Scottsdale, Ariz. **'
  },
  {
    siteName: 'CannaSOS.com',
    typeOfSite: 'Some fake stories',
    registration: 'Scottsdale, Ariz. **'
  },
  {
    siteName: 'Channel18News.com',
    typeOfSite: 'Imposter site',
    registration: 'Scottsdale, Ariz. **'
  },
  {
    siteName: 'ChristianTimesNewspaper.com',
    typeOfSite: 'Imposter site',
    registration: 'Scottsdale, Ariz. **'
  },
  {
    siteName: 'ChristianToday.info',
    typeOfSite: 'Fake news',
    registration: 'Scottsdale, Ariz. **'
  },
  {
    siteName: 'CivicTribune.com',
    typeOfSite: 'Fake news',
    registration: 'Scottsdale, Ariz. **'
  },
  {
    siteName: 'CivicTribune.com',
    typeOfSite: 'Imposter site',
    registration: 'Scottsdale, Ariz. **'
  },
  {
    siteName: 'ClashDaily.com',
    typeOfSite: 'Fake news',
    registration: 'Scottsdale, Ariz. **'
  },
  {
    siteName: 'CNNews3.com',
    typeOfSite: 'Imposter site',
    registration: 'Scottsdale, Ariz. **'
  },
  {
    siteName: 'Coed.com',
    typeOfSite: 'Some fake stories',
    registration: 'New York, N.Y.'
  },
  {
    siteName: 'ConservativeDailyPost.com',
    typeOfSite: 'Fake news',
    registration: 'Panama, Pa. *'
  },
  {
    siteName: 'ConservativeFlashNews.com',
    typeOfSite: 'Fake news',
    registration: 'Panama, Pa.*'
  },
  {
    siteName: 'ConservativeInfoCorner.com',
    typeOfSite: 'Fake news',
    registration: 'Came up as available for use'
  },
  {
    siteName: 'ConservativeSpirit.com',
    typeOfSite: 'Fake news',
    registration: 'Chesterbrook, Pa.^'
  },
  {
    siteName: 'DailyInfoBox.com',
    typeOfSite: 'Fake news',
    registration: 'Panama, Pa.*'
  },
  {
    siteName: 'DailyNews10.com',
    typeOfSite: 'Imposter site',
    registration: 'Scottsdale, Ariz. **'
  },
  {
    siteName: 'DailyNews5.com',
    typeOfSite: 'Imposter site',
    registration: 'Scottsdale, Ariz. **'
  },
  {
    siteName: 'DailyNewsPosts.info',
    typeOfSite: 'Fake news',
    registration: 'Chesterbrook, Pa ^'
  },
  {
    siteName: 'DailySnark.com',
    typeOfSite: 'Parody site',
    registration: 'Scottsdale, Ariz. **'
  },
  {
    siteName: 'DailySurge.com',
    typeOfSite: 'Fake news',
    registration: 'Alexandria, Va.'
  },
  {
    siteName: 'DailyUSAUpdate.com',
    typeOfSite: 'Fake news',
    registration: 'Scottsdale, Ariz. **'
  },
  {
    siteName: 'DamnLeaks.com',
    typeOfSite: 'Fake news',
    registration: 'Colorado Springs, Colo. '
  },
  {
    siteName: 'DemocraticMoms.com',
    typeOfSite: 'Fake news',
    registration: 'Panama, Pa. *'
  },
  {
    siteName: 'DenverInquirer.com',
    typeOfSite: 'Imposter site',
    registration: 'Toronto, Canada !!!'
  },
  {
    siteName: 'DepartedMedia.com',
    typeOfSite: 'Fake news',
    registration: 'Chesterbrook, Pa.^'
  },
  {
    siteName: 'Disclose.tv',
    typeOfSite: 'Fake news',
    registration: 'Passau, Germany'
  },
  {
    siteName: 'DIYHours.net',
    typeOfSite: 'Fake news',
    registration: 'Panama, Pa.*'
  },
  {
    siteName: 'DonaldTrumpPOTUS45.com',
    typeOfSite: 'Fake news',
    registration: 'Free Union, Va.'
  },
  {
    siteName: 'EmpireHerald.com',
    typeOfSite: 'Imposter site',
    registration: 'Scottsdale, Ariz. **'
  },
  {
    siteName: 'EmpireNews.net',
    typeOfSite: 'Parody site',
    registration: 'Chesterbrook, Pa ^'
  },
  {
    siteName: 'EmpireSports.co',
    typeOfSite: 'Parody site',
    registration: 'Sellersburg, IN'
  },
  {
    siteName: 'En-Volve.com',
    typeOfSite: 'Fake news',
    registration: 'Chesterbrook, Pa. ^'
  },
  {
    siteName: 'ENHLive.com',
    typeOfSite: 'Fake news',
    registration: 'Brea, Calif. !!'
  },
  {
    siteName: 'FederalistTribune.com',
    typeOfSite: 'Fake news',
    registration: 'Brea, Calif. !!'
  },
  {
    siteName: 'FedsAlert.com',
    typeOfSite: 'Fake news',
    registration: 'Scottsdale, Ariz. **'
  },
  {
    siteName: 'FirstPost.com',
    typeOfSite: 'Some fake stories',
    registration: 'Mumbai, India'
  },
  {
    siteName: 'FlashNewsCorner.com',
    typeOfSite: 'Fake news',
    registration: 'Panama, Pa.*'
  },
  {
    siteName: 'FloridaSunPost.com',
    typeOfSite: 'Parody site',
    registration: 'Toronto, Canada !!!'
  },
  {
    siteName: 'FocusNews.info',
    typeOfSite: 'Fake news',
    registration: 'Scottsdale, Ariz. **'
  },
  {
    siteName: 'Fox-News24.com',
    typeOfSite: 'Imposter site',
    registration: 'Scottsdale, Ariz. **'
  },
  {
    siteName: 'FreedomDaily.com',
    typeOfSite: 'Fake news',
    registration: 'Scottsdale, Ariz. **'
  },
  {
    siteName: 'FreedomCrossroads.us',
    typeOfSite: 'Fake news',
    registration: 'North Waterboro, Me.'
  },
  {
    siteName: 'FreedomsFinalStand.com',
    typeOfSite: 'Fake news',
    registration: 'Scottsdale, Ariz. **'
  },
  {
    siteName: 'FreeWoodPost.com',
    typeOfSite: 'Parody site',
    registration: 'Scottsdale, Ariz. **'
  },
  {
    siteName: 'FreshDailyReport.com',
    typeOfSite: 'Fake news',
    registration: 'Veles, Macedonia'
  },
  {
    siteName: 'GiveMeLiberty01.com',
    typeOfSite: 'Fake news',
    registration: 'Scottsdale, Ariz. **'
  },
  {
    siteName: 'GlobalPoliticsNow.com',
    typeOfSite: 'Fake news',
    registration: 'Kumanovo, Macedonia'
  },
  {
    siteName: 'GummyPost.com',
    typeOfSite: 'Fake news',
    registration: 'Scottsdale, Ariz. **'
  },
  {
    siteName: 'HealthyCareAndBeauty.com',
    typeOfSite: 'Some fake stories',
    registration: 'Berlin, Germany'
  },
  {
    siteName: 'HealthyWorldHouse.com',
    typeOfSite: 'Fake news',
    registration: 'Kumanovo, Macedonia'
  },
  {
    siteName: 'HoustonChronicle-TV.com',
    typeOfSite: 'Imposter site',
    registration: 'Scottsdale, Ariz. **'
  },
  {
    siteName: 'ILoveNativeAmericans.us',
    typeOfSite: 'Some fake stories',
    registration: 'Kosovo, Serbia'
  },
  {
    siteName: 'InterestingDailyNews.com',
    typeOfSite: 'Fake news',
    registration: 'Orem, Utah~'
  },
  {
    siteName: 'IsThatLegit.com',
    typeOfSite: 'Fake news',
    registration: 'Toronto, Canada !!!'
  },
  {
    siteName: 'JewsNews.co.il',
    typeOfSite: 'Some fake stories',
    registration: 'Shiloh, Israel'
  },
  {
    siteName: 'KMT11.com',
    typeOfSite: 'Imposter site',
    registration: 'Scottsdale, Ariz. **'
  },
  {
    siteName: 'Konkonsagh.biz',
    typeOfSite: 'Fake news',
    registration: 'Ashanti, Ghana'
  },
  {
    siteName: 'KY12News.com',
    typeOfSite: 'Imposter site',
    registration: 'Scottsdale, Ariz. **'
  },
  {
    siteName: 'LadyLibertysNews.com',
    typeOfSite: 'Fake news',
    registration: 'Kirkland, Wash.***'
  },
  {
    siteName: 'LastDeplorables.com',
    typeOfSite: 'Fake news',
    registration: 'Scottsdale, Ariz. **'
  },
  {
    siteName: 'LearnProgress.org',
    typeOfSite: 'Some fake stories',
    registration: 'Scottsdale, Ariz. **'
  },
  {
    siteName: 'Liberty-Courier.com',
    typeOfSite: 'Fake news',
    registration: 'Orem, Utah~'
  },
  {
    siteName: 'LiberalPlug.com',
    typeOfSite: 'Fake news',
    registration: 'Scottsdale, Ariz. **'
  },
  {
    siteName: 'LibertyAlliance.com',
    typeOfSite: 'Fake news',
    registration: 'Dallas, Ga. '
  },
  {
    siteName: 'Local31News.com',
    typeOfSite: 'Imposter site',
    registration: 'Scottsdale, Ariz. **'
  },
  {
    siteName: 'MadWorldNews.com',
    typeOfSite: 'Fake news',
    registration: 'Scottsdale, Ariz. **'
  },
  {
    siteName: 'MajorThoughts.com',
    typeOfSite: 'Fake news',
    registration: 'Sunrise, Fla. '
  },
  {
    siteName: 'Mentor2day.com',
    typeOfSite: 'Some fake stories',
    registration: 'Scottsdale, Ariz. **'
  },
  {
    siteName: 'MetropolitanWorlds.com',
    typeOfSite: 'Fake news',
    registration: 'Accra, Ghana'
  },
  {
    siteName: 'MIssissippiHerald.com',
    typeOfSite: 'Imposter site',
    registration: 'Toronto, Canada !!!'
  },
  {
    siteName: 'NationalReport.net',
    typeOfSite: 'Parody site',
    registration: 'Scottsdale, Ariz. **'
  },
  {
    siteName: 'NativeAmericans.us',
    typeOfSite: 'Some fake stories',
    registration: 'Cary, N.C.'
  },
  {
    siteName: 'NBC.com.co',
    typeOfSite: 'Imposter site',
    registration: 'Phoenix, Ariz.'
  },
  {
    siteName: 'NeonNettle.com',
    typeOfSite: 'Fake news',
    registration: 'Toronto, Canada !!!'
  },
  {
    siteName: 'Nephef.com',
    typeOfSite: 'Fake news',
    registration: 'Panama, Pa.*'
  },
  {
    siteName: 'NewPoliticsToday.com',
    typeOfSite: 'Fake news',
    registration: 'Kumanovo, Macedonia'
  },
  {
    siteName: 'News4KTLA.com',
    typeOfSite: 'Imposter site',
    registration: 'Scottsdale, Ariz. **'
  },
  {
    siteName: 'NewsBreaksHere.com',
    typeOfSite: 'Fake news',
    registration: 'Chesterbrook, Pa.^'
  },
  {
    siteName: 'NewsBreakingsPipe.com',
    typeOfSite: 'Fake news',
    registration: 'Limassol, Cyprus'
  },
  {
    siteName: 'NewsBySquad.com',
    typeOfSite: 'Fake news',
    registration: 'Panama, Pa. *'
  },
  {
    siteName: 'NewsDaily12.com',
    typeOfSite: 'Imposter site',
    registration: 'Scottsdale, Ariz. **'
  },
  {
    siteName: 'NewsExaminer.net',
    typeOfSite: 'Fake news',
    registration: 'Nobby Beach, Australia !!'
  },
  {
    siteName: 'NewsLeak.co',
    typeOfSite: 'Fake news',
    registration: 'Tblisi, Georgia'
  },
  {
    siteName: 'Newslo.com',
    typeOfSite: 'Parody site',
    registration: 'Thessaloniki, Greece'
  },
  {
    siteName: 'NewsJustForYou1.blogspot.com',
    typeOfSite: 'Fake news',
    registration: 'Mountain View, Calif.'
  },
  {
    siteName: 'NewzMagazine.com',
    typeOfSite: 'Fake news',
    registration: 'Scottsdale, Ariz. **'
  },
  {
    siteName: 'NotAllowedTo.com',
    typeOfSite: 'Fake news',
    registration: 'https://www.whois.com/whois/notallowedto.com'
  },
  {
    siteName: 'Now8News.com',
    typeOfSite: 'Imposter site',
    registration: 'Scottsdale, Ariz. **'
  },
  {
    siteName: 'OccupyDemocrats.com',
    typeOfSite: 'Fake news',
    registration: 'Langhorne, Pa. '
  },
  {
    siteName: 'OnePoliticalPlaza.com',
    typeOfSite: 'Fake news',
    registration: 'Miami, Fla.^^^'
  },
  {
    siteName: 'OpenMagazines.com',
    typeOfSite: 'Fake news',
    registration: 'Scottsdale, Ariz. **'
  },
  {
    siteName: 'Politicalo.com',
    typeOfSite: 'Parody site',
    registration: 'Jerusalem, Israel'
  },
  {
    siteName: 'Politicass.com',
    typeOfSite: 'Parody site',
    registration: 'Jerusalem, Israel'
  },
  {
    siteName: 'Politicono.com',
    typeOfSite: 'Parody site',
    registration: 'Jerusalem, Israel'
  },
  {
    siteName: 'Politicops.com',
    typeOfSite: 'Parody site',
    registration: 'Jerusalem, Israel'
  },
  {
    siteName: 'Politicot.com',
    typeOfSite: 'Parody site',
    registration: 'Jerusalem, Israel'
  },
  {
    siteName: 'PoliticsUSANews.com',
    typeOfSite: 'Fake news',
    registration: 'Panama, Pa.*'
  },
  {
    siteName: 'President45DonaldTrump.com',
    typeOfSite: 'Fake news',
    registration: 'Burlington, Mass. ~'
  },
  {
    siteName: 'Prntly.com',
    typeOfSite: 'Fake news',
    registration: 'Nobby Beach, Australia !!'
  },
  {
    siteName: 'ProudLeader.com',
    typeOfSite: 'Fake news',
    registration: 'North Waterboro, Me.'
  },
  {
    siteName: 'ReadConservatives.news',
    typeOfSite: 'Fake news',
    registration: 'Kirkland, Wash.***'
  },
  {
    siteName: 'RealNewsRightNow.com',
    typeOfSite: 'Parody site',
    registration: 'Los Angeles, Calif.'
  },
  {
    siteName: 'RedCountry.us',
    typeOfSite: 'Fake news',
    registration: 'Veles, Macedonia'
  },
  {
    siteName: 'RedInfo.us',
    typeOfSite: 'Fake news',
    registration: 'Veles, Macedonia'
  },
  {
    siteName: 'RedRockTribune.com',
    typeOfSite: 'Imposter site',
    registration: 'Scottsdale, Ariz. **'
  },
  {
    siteName: 'Religionlo.com',
    typeOfSite: 'Parody site',
    registration: 'Jerusalem, Israel'
  },
  {
    siteName: 'ReligionMind.com',
    typeOfSite: 'Fake news',
    registration: 'Balangoda, Sri Lanka'
  },
  {
    siteName: 'Rogue-Nation3.com',
    typeOfSite: 'Fake news',
    registration: 'Quebec, Canada'
  },
  {
    siteName: 'RumorJournal.com',
    typeOfSite: 'Fake news',
    registration: 'Panama, Pa. *'
  },
  {
    siteName: 'SatiraTribune.com',
    typeOfSite: 'Parody site',
    registration: 'Scottsdale, Ariz. **'
  },
  {
    siteName: 'Smag31.com',
    typeOfSite: 'Some fake stories',
    registration: 'Dundalk, Ireland'
  },
  {
    siteName: 'SocialEverythings.com',
    typeOfSite: 'Fake news',
    registration: 'Mahawela, Sri Lanka'
  },
  {
    siteName: 'SouthernConservativeExtra.com',
    typeOfSite: 'Fake news',
    registration: 'Came up as available for use'
  },
  {
    siteName: 'Spinzon.com',
    typeOfSite: 'Fake news',
    registration: 'Panama, Pa. *'
  },
  {
    siteName: 'States-TV.com',
    typeOfSite: 'Fake news',
    registration: 'Scottsdale, Ariz. **'
  },
  {
    siteName: 'Success-Street.com',
    typeOfSite: 'Fake news',
    registration: 'Kumanovo, Macedonia'
  },
  {
    siteName: 'SupremePatriot.com',
    typeOfSite: 'Fake news',
    registration: 'Panama, Pa. *'
  },
  {
    siteName: 'TDTAlliance.com',
    typeOfSite: 'Fake news',
    registration: 'Scottsdale, Ariz. **'
  },
  {
    siteName: 'TeaParty.org',
    typeOfSite: 'Some fake stories',
    registration: 'Laguna Woods, Calif.'
  },
  {
    siteName: 'ThatViralFeed.net',
    typeOfSite: 'Some fake stories',
    registration: 'Denver, Colo.'
  },
  {
    siteName: 'The-Insider.co',
    typeOfSite: 'Fake news',
    registration: 'Scottsdale, Ariz. **'
  },
  {
    siteName: 'ThePremiumNews.com',
    typeOfSite: 'Fake news',
    registration: 'Panama, Pa. *'
  },
  {
    siteName: 'The-Postillon.com',
    typeOfSite: 'Parody site',
    registration: 'Roubaix, France'
  },
  {
    siteName: 'TheBigRiddle.com',
    typeOfSite: 'Some fake stories',
    registration: 'Scottsdale, Ariz. **'
  },
  {
    siteName: 'TheInternetPost.net',
    typeOfSite: 'Fake news',
    registration: 'Scottsdale, Ariz. **'
  },
  {
    siteName: 'TheLastLineOfDefense.org',
    typeOfSite: 'Parody site',
    registration: 'Scottsdale, Ariz. **'
  },
  {
    siteName: 'TheMoralOfTheStory.us',
    typeOfSite: 'Fake news',
    registration: 'Paradise, Calif.'
  },
  {
    siteName: 'TheNationalMarijuanaNews.com',
    typeOfSite: 'Some fake stories',
    registration: 'Henderson, Nev.'
  },
  {
    siteName: 'TheNet24h.com',
    typeOfSite: 'Fake news',
    registration: 'Brisbane, Australia'
  },
  {
    siteName: 'TheNewYorkEvening.com',
    typeOfSite: 'Imposter site',
    registration: 'Kumanovo, Macedonia'
  },
  {
    siteName: 'ThePoliticalInsider.com',
    typeOfSite: 'Some fake stories',
    registration: 'Scottsdale, Ariz. **'
  },
  {
    siteName: 'TheRightists.com',
    typeOfSite: 'Parody site',
    registration: 'Jerusalem, Israel'
  },
  {
    siteName: 'TheSeattleTribune.com',
    typeOfSite: 'Parody site',
    registration: 'Scottsdale, Ariz. **'
  },
  {
    siteName: 'TheTrumpMedia.com',
    typeOfSite: 'Fake news',
    registration: 'Scottsdale, Ariz. **'
  },
  {
    siteName: 'TheUSA-News.com',
    typeOfSite: 'Fake news',
    registration: 'Chesterbrook, Pa.^'
  },
  {
    siteName: 'TheUSAConservative.com',
    typeOfSite: 'Fake news',
    registration: 'Scottsdale, Ariz. **'
  },
  {
    siteName: 'TheWashingtonPress.com',
    typeOfSite: 'Imposter site',
    registration: 'Laurium, Mich. '
  },
  {
    siteName: 'Times.com.mx',
    typeOfSite: 'Imposter site',
    registration: 'Chesterbrook, Pa ^'
  },
  {
    siteName: 'TMZWorldNews.com',
    typeOfSite: 'Fake news',
    registration: 'Scottsdale, Ariz.**'
  },
  {
    siteName: 'TrueAmericans.me',
    typeOfSite: 'Fake news',
    registration: 'Chesterbrook, Pa. ^'
  },
  {
    siteName: 'TrueTrumpers.com',
    typeOfSite: 'Fake news',
    registration: 'Chesterbrook, Pa.^'
  },
  {
    siteName: 'UndergroundNewsReport.com',
    typeOfSite: 'Fake news',
    registration: 'Scottsdale, Ariz. **'
  },
  {
    siteName: 'UniversePolitics.com',
    typeOfSite: 'Fake news',
    registration: 'Veles, Macedonia'
  },
  {
    siteName: 'UrbanImageMagazine.com',
    typeOfSite: 'Some fake stories',
    registration: 'Marion, Indiana'
  },
  {
    siteName: 'USA-Radio.com',
    typeOfSite: 'Fake news',
    registration: 'Scottsdale, Ariz. **'
  },
  {
    siteName: 'USA-Television.com',
    typeOfSite: 'Imposter site',
    registration: 'Scottsdale, Ariz. **'
  },
  {
    siteName: 'USADailyInfo.com',
    typeOfSite: 'Fake news',
    registration: 'Panama *'
  },
  {
    siteName: 'USADailyPost.us',
    typeOfSite: 'Fake news',
    registration: 'Veles, Macedonia'
  },
  {
    siteName: 'USADailyTime.com',
    typeOfSite: 'Fake news',
    registration: 'Panama, Pa.*'
  },
  {
    siteName: 'USADoseNews.com',
    typeOfSite: 'Fake news',
    registration: 'Nobby Beach, Australia!!'
  },
  {
    siteName: 'USAFirstInformation.com',
    typeOfSite: 'Fake news',
    registration: 'Panama, Pa. *'
  },
  {
    siteName: 'USANews4U.us',
    typeOfSite: 'Fake news',
    registration: 'Veles, Virgin Islands'
  },
  {
    siteName: 'USANewsToday.com',
    typeOfSite: 'Fake news',
    registration: 'Scotts, Mich.'
  },
  {
    siteName: 'USAPoliticsNow.com',
    typeOfSite: 'Fake news',
    registration: 'Nobby Beach, Australia !!'
  },
  {
    siteName: 'USAPolitics24hrs.com',
    typeOfSite: 'Fake news',
    registration: 'Nobby Beach, Australia !!'
  },
  {
    siteName: 'USAPoliticsToday.com',
    typeOfSite: 'Fake news',
    registration: 'Brea, Calif.^^'
  },
  {
    siteName: 'USAPoliticsZone.com',
    typeOfSite: 'Fake news',
    registration: 'Veles, Macedonia'
  },
  {
    siteName: 'USASnich.com',
    typeOfSite: 'Fake news',
    registration: 'Scottsdale, Ariz. **'
  },
  {
    siteName: 'USATodayNews.me',
    typeOfSite: 'Imposter site',
    registration: 'Chesterbrook, Pa ^'
  },
  {
    siteName: 'USAWorldBox.com',
    typeOfSite: 'Fake news',
    registration: 'Panama, Pa.^'
  },
  {
    siteName: 'USHealthyAdvisor.com',
    typeOfSite: 'Fake news',
    registration: 'Panama, Pa.*'
  },
  {
    siteName: 'USHealthyLife.com',
    typeOfSite: 'Fake news',
    registration: 'Panama, Pa.*'
  },
  {
    siteName: 'USHerald.com',
    typeOfSite: 'Fake news',
    registration: 'Austin, Texas'
  },
  {
    siteName: 'USInfoNews.com',
    typeOfSite: 'Fake news',
    registration: 'Veles, Macedonia'
  },
  {
    siteName: 'USANewsHome.com',
    typeOfSite: 'Fake news',
    registration: 'Scottsdale, Ariz. **'
  },
  {
    siteName: 'USPOLN.com',
    typeOfSite: 'Fake news',
    registration: 'Scottsdale, Ariz. **'
  },
  {
    siteName: 'USPostman.com',
    typeOfSite: 'Fake news',
    registration: 'Veles, Macedonia'
  },
  {
    siteName: 'ViralActions.com',
    typeOfSite: 'Fake news',
    registration: 'Scottsdale, Ariz. **'
  },
  {
    siteName: 'VoxTribune.com',
    typeOfSite: 'Fake news',
    registration: 'Scottsdale, Ariz. **'
  },
  {
    siteName: 'WashingtonEvening.com',
    typeOfSite: 'Imposter site',
    registration: 'Kumanovo, Macedonia'
  },
  {
    siteName: 'WashingtonFeed.com',
    typeOfSite: 'Fake news',
    registration: 'Vancouver, Canada '
  },
  {
    siteName: 'WashingtonPost.com.co',
    typeOfSite: 'Imposter site',
    registration: 'Washington, DC'
  },
  {
    siteName: 'WeConservative.com',
    typeOfSite: 'Fake news',
    registration: 'Veles, Macedonia'
  },
  {
    siteName: 'WeLoveNative.com',
    typeOfSite: 'Some fake stories',
    registration: 'Pristina, Kosovo'
  },
  {
    siteName: 'WorldNewsDailyReport.com',
    typeOfSite: 'Parody site',
    registration: 'Nobby Beach, Australia !!'
  },
  {
    siteName: 'WorldPoliticsNow.com',
    typeOfSite: 'Fake news',
    registration: 'Nassau, Bahamas!'
  }
]
