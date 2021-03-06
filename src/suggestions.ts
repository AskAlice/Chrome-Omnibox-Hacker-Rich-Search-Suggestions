function Suggestion(name: string, aliases: string[], url: string, favicon: string, description: string) {
  this.name = name;
  this.aliases = aliases;
  this.aliases.unshift(name);
  this.url = url;
  this.favicon = favicon;
  this.description = description;
}

const suggestions = [];
const search = `~QUERYHERE~`;
suggestions.push(new Suggestion('public', ['pub'], `https://github.com/section/${search}`, 'github.png', 'Section Github Org Search'));
suggestions.push(new Suggestion('redirect', [], `${search}`, 'redirect.png', 'redirect to url'));
suggestions.push(
  new Suggestion(
    'orders',
    ['azorders'],
    `https://smile.amazon.com/gp/your-account/order-history/ref=ppx_yo_dt_b_search?opt=ab&search=${search}`,
    'amazon-32.jpg',
    'redirect to url'
  )
);
suggestions.push(new Suggestion('ghe', ['ghs'], `https://github.sie.sony.com/search?q=${search}`, 'github.png', 'Sony Github Org Search'));
suggestions.push(new Suggestion('jira', [], `https://jira.sie.sony.com/issues/?jql=key%20%3D%20${search}`, 'jira.png', 'Sony Jira Search'));
suggestions.push(new Suggestion('scorpio', ['sco'], `https://jira.sie.sony.com/browse/SCORPIO-${search}`, 'jira.png', 'Sony Jira Search'));
export default suggestions;
