module.exports = {
  title: "None",
  author: "Gio",
  summary: "LP Psycholonials MSPFA",
  version: 1.0,

  edit: true,

  trees: {
    './': 'assets://mspfa/Psycholonials (online)_online/',
  },
  async asyncComputed(api) {
    const story = await api.readYamlAsync("./story.yaml")
    return {
      styles: [
        {body: await api.readFileAsync("./adventure.scss")}
      ],
      edit(archive){
        archive.mspfa['Psycholonials (online)_online'] = story
      }
    }
  }
}

