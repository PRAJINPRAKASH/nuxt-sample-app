export default {
  data() {
    return {
      drawer: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Tests',
          to: '/tests'
        }
      ],
      title: process.env.APP
    }
  }
}
