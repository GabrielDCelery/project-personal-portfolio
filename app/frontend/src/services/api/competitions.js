class Competitions {
  async getList() {
    return [
      {
        name: 'HALITE 3',
        type: 'ARTIFICIAL INTELLIGENCE CHALLENGE',
        reportUrl: 'https://2018.halite.io/user/?user_id=7606',
        codeUrl: 'https://github.com/GabrielDCelery/competition-halite-iii',
        description:
          'Halite III is a resource management game in which players build and command ships that explore the ocean and collect   halite. Ships use halite as an energy source, and the player with the most stored halite at the end of the game is the winner.',
        previewImage: 'halitePreviewImage',
        finalPlace: 222,
        numOfCompetitors: 4014
      },
      {
        name: 'UNLEASH THE GEEK',
        type: 'ARTIFICIAL INTELLIGENCE CHALLENGE',
        reportUrl:
          'https://www.codingame.com/challengereport/2267122999d7bcac925c923b59faa97cf2624883',
        codeUrl:
          'https://github.com/GabrielDCelery/competition-codingame-unleash-the-geek',
        description:
          'Both players control a team of several robots. The teams start out at the same points on the map, at the headquarters. The robots can use radars from the headquarters to detect and mine   Amadeusium veins. They may also trap certain areas of the map  with EMP traps. These can be triggered by robots which are  then rendered inoperable.',
        previewImage: 'unleashTheGeekPreviewImage',
        finalPlace: 1151,
        numOfCompetitors: 2162
      }
    ];
  }
}

export default new Competitions();
