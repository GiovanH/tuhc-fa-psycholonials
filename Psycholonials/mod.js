module.exports = {
  title: "Psycholonials",
  author: "Gio",
  summary: "LP Psycholonials MSPFA",
  version: 1.1,

  edit: true,

  trees: {
    './': 'assets://mspfa/Psycholonials/',
  },
  async asyncComputed(api) {
    const story = await api.readYamlAsync("./story.yaml")
    return {
      styles: [
        {body: await api.readFileAsync("./adventure.scss")}
      ],
      edit(archive){
        archive.mspfa['Psycholonials'] = story
      }
    }
  }
}

