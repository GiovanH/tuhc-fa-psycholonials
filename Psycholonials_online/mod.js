module.exports = {
  title: "Psycholonials (online)",
  author: "Gio",
  summary: "LP Psycholonials MSPFA",
  version: 1.1,

  edit: true,

  trees: {
    './': 'assets://mspfa/Psycholonials_online/',
  },
  async asyncComputed(api) {
    const story = await api.readYamlAsync("./story.yaml")
    return {
      styles: [
        {body: await api.readFileAsync("./adventure.scss")}
      ],
      edit(archive){
        archive.mspfa['Psycholonials_online'] = story
      }
    }
  }
}

