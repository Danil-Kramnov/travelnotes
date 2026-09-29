const index = function (req, res) {
  const countries = [
    {
      name: 'Ireland',
      cities: [
        {
          name: 'Tralee',
          places: [
            {
              name: 'Blennerville Windmill',
              category: 'Landmark',
              status: 'Visited',
              note: 'Great little museum, windy day',
            },
            {
              name: 'Siamsa Tíre',
              category: 'Theatre',
              status: 'Planned',
              note: null,
            },
          ],
        },
        {
          name: 'Dublin',
          places: [
            {
              name: 'Trinity College Library',
              category: 'Landmark',
              status: 'Planned',
              note: null,
            },
            {
              name: 'Guinness Storehouse',
              category: 'Museum',
              status: 'Visited',
              note: 'Busy but worth it for the rooftop view',
            },
          ],
        },
      ],
    },
  ];

  res.render('dashboard', { title: 'Dashboard', countries });
};

module.exports = { index, };