const JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Nguyễn Phạm Sang Giàu',
  jobTitle: 'Data-Driven Analyst',
  description: 'Expert in Quantitative Finance, Algorithmic Trading, and Supply Chain Management',
  url: 'https://NguyenPhamSangGIau.vercel.app',
  sameAs: [
    'https://www.linkedin.com/in/sanggiau',
    'https://github.com/sanggiau',
  ],
  knowsAbout: [
    'Quantitative Finance',
    'Algorithmic Trading',
    'Data Science',
    'Python Programming',
    'SQL Database',
    'Machine Learning',
    'Financial Analysis',
    'Risk Management',
    'Supply Chain Management',
    'MetaTrader 5',
    'Pine Script',
    'MQL5',
  ],
  worksFor: {
    '@type': 'Organization',
    name: 'Independent Algo-Trader',
  },
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Foreign Trade University - FTU2',
  },
  award: [
    'Top 40 National FSC Competition',
    'Prop Firm Funded Trader ($10k-$50k)',
  ],
};

export default function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
    />
  );
}
