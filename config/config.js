module.exports = {
  brand: 'Søndervig',
  pages: [
    {
      meta: {
        id: 'index',
        template: 'index',
        url: '/'
      },
      title: '#TR-0001',
      foldTitle: '#TR-0002',
      foldSubtitle: '#TR-0003',
      foldBackground: '/images/fold.jpg',
      attractionsTitle: '#TR-0004',
      attractionsSubtitle: '#TR-0005',
      aboutTitle: '#TR-0006',
      aboutSubtitle: '#TR-0023',
      aboutDescription: '#TR-0007',
      aboutImage: '/images/location.png',
      experienceTitle: '#TR-0021',
      experienceSubtitle: '#TR-0022',
      experienceLabel: '#TR-0009',
      experienceUrl: '/experience'
    },
    {
      meta: {
        id: 'attractions'
      },
      category: '#TR-0010',
      pages: [
        {
          meta: {
            id: 'lighthouse',
            template: 'attraction',
            url: '/attractions/lighthouse'
          },
          title: '#TR-0011',
          img: '/images/lighthouse.jpg',
          description: '#TR-0013'
        },
        {
          meta: {
              id: 'sandart',
              template: 'attraction',
              url: '/attractions/sand-art'
          },
          title: '#TR-0014',
          img: '/images/sand-art.jpg',
          description: '#TR-0016'
        },
        {
          meta: {
            id: 'beach',
            template: 'attraction',
            url: '/attractions/beach'
          },
          title: '#TR-0017',
          img: '/images/beach.jpg',
          description: '#TR-0019'
        }
      ]
    },
    {
      meta: {
        id: 'experience',
        template: 'experience',
        url: '/experience'
      },
      title: 'Experience',
      questions: '#TR-0020',
      title: '#TR-0021',
      subtitle: '#TR-0022'
    }
  ]
}
