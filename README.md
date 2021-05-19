# Is bolaget closed?

This site provides endpoints to query for deviation in opening hours for Systembolaget. I created this site due to my own inability to remember and plan for than a few days ahead. This backfired more than once when forgetting about holidays etc and lead to me missing out of on great beverages and memories.

Visit: [https://is-bolaget-closed.ricw.se/](https://is-bolaget-closed.ricw.se/)

All data and search funcitonality is provided by Systembolaget official API. You can find more information about it on [https://api-portal.systembolaget.se/](https://api-portal.systembolaget.se/) and everything else on Systembolaget official website [https://www.systembolaget.se/](https://www.systembolaget.se/).

## Instructions

Search and find your favorite store. Today's and tomorrow's closing time will show in the list. If the store is closed one day a closed sign is visible instead of the time. If the store's closing time deviates from the normal it will be flagged with a red color. Click the 🔗 button to get to the status endpoint. Create an automated daily request to the endpoint, use the `daysAhead` query parameter and let technology warn you when opening hours are deviating. Check `isDeviant` for deviations.

## Gotchas

- Sundays are always closed and are therefore not a deviation.
- Stores always open at 10:00 and therefore opening time is not displayed.

### License

For this website, see the LICENSE file.

### Tech

- [Next.js](https://nextjs.org/)
- [Chakra UI](https://chakra-ui.com/)
- [Vercel](https://vercel.com/)
