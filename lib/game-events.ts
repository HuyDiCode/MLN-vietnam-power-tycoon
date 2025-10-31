export type Kpis = {
  finance: number;
  energy: number;
  satisfaction: number;
  politics: number;
};

export type GameOverResult = {
  status: "lose" | "win";
  reason: string;
  finalKpis: Kpis;
  history?: unknown[];
};

export interface GameEvent {
  id: string;
  title: string;
  icon: string;
  category: string;
  description: string;
  choices: Array<{
    label: string;
    description: string;
    impact: {
      finance: number;
      energy: number;
      satisfaction: number;
      politics: number;
    };
  }>;
}

export const EVENTS: GameEvent[] = [
  {
    id: "coal-price-increase",
    title: "Giá than toàn cầu tăng 200%",
    icon: "📈",
    category: "Khủng hoảng kinh tế",
    description:
      "Giá than trên thị trường toàn cầu tăng vọt. ELV phải quyết định cách ứng phó với tình huống này. Nếu không tăng giá điện, tập đoàn sẽ lỗ nặng. Nhưng tăng giá sẽ gây bất mãn dân chúng.",
    choices: [
      {
        label: "📢 Tăng giá điện ngay lập tức",
        description: "Bảo vệ tài chính nhưng gây bất mãn xã hội cao",
        impact: { finance: 15, energy: 5, satisfaction: -20, politics: -10 },
      },
      {
        label: "💼 Cắt chi phí bảo trì (ngắn hạn)",
        description: "Giữ giá, nhưng rủi ro sự cố lâu dài",
        impact: { finance: 10, energy: -15, satisfaction: 10, politics: 5 },
      },
      {
        label: "🏦 Vay quốc tế",
        description: "Duy trì giá, nhưng tăng nợ quốc tế",
        impact: { finance: -5, energy: 5, satisfaction: 10, politics: 15 },
      },
    ],
  },
  {
    id: "renewable-boom",
    title: "Sự phát triển bùng nổ của điện tái tạo",
    icon: "☀️",
    category: "Chính sách & Đầu tư",
    description:
      "Hàng chục dự án điện tái tạo (điện mặt trời, điện gió) muốn đấu nối vào hệ thống. Lưới điện hiện tại không thể chịu được công suất này. Bạn phải chọn: từ chối (mất đầu tư), chấp nhận toàn bộ (quá tải lưới), hay nâng cấp lưới (đầu tư lớn)?",
    choices: [
      {
        label: "❌ Từ chối tất cả dự án điện tái tạo",
        description: "Bảo vệ lưới nhưng mất cơ hội xanh hóa",
        impact: { finance: 5, energy: 10, satisfaction: -10, politics: -15 },
      },
      {
        label: "⚡ Chấp nhận và chuẩn bị chịu giảm phát",
        description:
          "Tăng điện tái tạo nhưng phải giảm phát/cắt giảm công suất dư",
        impact: { finance: -10, energy: -20, satisfaction: 5, politics: 10 },
      },
      {
        label: "🔧 Đầu tư nâng cấp lưới truyền tải",
        description: "Chi phí lớn nhưng giải quyết bền vững",
        impact: { finance: -20, energy: 30, satisfaction: 10, politics: 20 },
      },
    ],
  },
  {
    id: "government-rural-power",
    title: "Chính phủ yêu cầu kéo điện ra vùng sâu",
    icon: "🏘️",
    category: "Nhiệm vụ công ích",
    description:
      "Thủ tướng yêu cầu ELV kéo điện đến 1000 hộ dân ở đảo X. Không được tính vào giá điện (tức là lỗ). Bạn phải chọn: chịu lỗ, trì hoãn, hay đàm phán ngân sách nhà nước?",
    choices: [
      {
        label: "✅ Chấp nhận, tập đoàn gánh lỗ",
        description: "Giữ lòng dân nhưng lỗ tài chính",
        impact: { finance: -15, energy: 10, satisfaction: 15, politics: 15 },
      },
      {
        label: "⏱️ Trì hoãn dự án",
        description: "Bảo vệ tài chính nhưng mất điểm chính trị",
        impact: { finance: 5, energy: 0, satisfaction: -5, politics: -20 },
      },
      {
        label: "💬 Đàm phán ngân sách nhà nước",
        description: "Yêu cầu nhà nước cấp vốn dự án",
        impact: { finance: 10, energy: 5, satisfaction: 10, politics: 10 },
      },
    ],
  },
  {
    id: "heatwave-crisis",
    title: "Sóng nhiệt kỷ lục — nhu cầu điện tăng 20%",
    icon: "🌡️",
    category: "Thảm họa thiên nhiên",
    description:
      "Nắng nóng kỷ lục khiến nhu cầu điện (chủ yếu điều hòa) tăng vọt 20%. Hồ thủy điện xuống mức thấp kỷ lục. ELV không có đủ điện để cung cấp mà không tăng giá hoặc cắt giảm cho nhóm dân cư.",
    choices: [
      {
        label: "🔌 Ưu tiên cung cấp cho công nghiệp",
        description: "GDP tăng nhưng dân bục xúc, cắt điện gia đình",
        impact: { finance: 20, energy: -10, satisfaction: -25, politics: -10 },
      },
      {
        label: "👥 Ưu tiên gia đình + hạn chế công nghiệp",
        description: "Dân hài lòng nhưng GDP bị ảnh hưởng",
        impact: { finance: -10, energy: -5, satisfaction: 20, politics: 10 },
      },
      {
        label: "🚀 Kích hoạt LNG khẩn cấp",
        description: "Đủ điện nhưng chi phí tăng gấp đôi",
        impact: { finance: -25, energy: 25, satisfaction: 10, politics: 15 },
      },
    ],
  },
  {
    id: "transmission-loss",
    title: "Dư điện miền Trung nhưng miền Bắc thiếu",
    icon: "⚡",
    category: "Bài toán hệ thống",
    description:
      "Miền Trung phát quá nhiều điện (năng lượng mặt trời vào buổi trưa), nhưng lưới truyền tải sang miền Bắc quá tải 150%. Miền Bắc vẫn bị mất điện một phần. Đây là vấn đề về hạ tầng truyền tải, không phải phát điện.",
    choices: [
      {
        label: "🔴 Cắt điện ở phía phát (điện mặt trời)",
        description: "Giảm giảm phát nhưng lỗ nhà đầu tư điện tái tạo",
        impact: { finance: -10, energy: 5, satisfaction: -10, politics: -5 },
      },
      {
        label: "🔵 Chấp nhận mất điện giãn thời gian",
        description: "Tránh tổn thất lớn hơn nhưng dân bức xúc",
        impact: { finance: 5, energy: -20, satisfaction: -15, politics: -10 },
      },
      {
        label: "🌉 Xây dựng đường dây HVDC Miền Trung-Bắc",
        description: "Giải pháp dài hạn nhưng tốn kém",
        impact: { finance: -30, energy: 30, satisfaction: 5, politics: 20 },
      },
    ],
  },
  {
    id: "corruption-scandal",
    title: "Scandal tham nhũng dự án năng lượng",
    icon: "💼",
    category: "Rủi ro chính trị",
    description:
      "Báo chí tiết lộ dự án đầu tư 500 triệu USD bị thổi phồng giá 30%. Công chúng và Quốc hội yêu cầu điều tra. Bạn phải chọn: chối bỏ (nhưng mất tin tưởng), thừa nhận & cải cách, hay chịu cách chức.",
    choices: [
      {
        label: "🙅 Chối bỏ hoàn toàn",
        description: "Rủi ro lớn nhưng tránh trách nhiệm ngắn hạn",
        impact: { finance: 0, energy: 0, satisfaction: -25, politics: -30 },
      },
      {
        label: "✍️ Thừa nhận & tiến hành cải cách",
        description: "Mất mặt nhưng giữ công việc và lòng dân",
        impact: { finance: -5, energy: 0, satisfaction: 15, politics: 5 },
      },
      {
        label: "🤝 Hợp tác điều tra đầy đủ",
        description: "Tăng cường minh bạch, giải quyết gốc rễ",
        impact: { finance: -10, energy: 0, satisfaction: 25, politics: 15 },
      },
    ],
  },
  {
    id: "lng-price-spike",
    title: "Giá LNG (khí thiên nhiên hóa lỏng) nhập khẩu tăng 150%",
    icon: "💨",
    category: "Khủng hoảng năng lượng",
    description:
      "Tình hình thế giới căng thẳng, giá LNG trên thị trường tăng gấp 3 lần. Các nhà máy LNG của ELV sắp mất lợi nhuận. Bạn phải quyết định: tăng giá điện, giảm sử dụng LNG, hay vay thêm?",
    choices: [
      {
        label: "📊 Tăng giá điện để hấp thụ chi phí",
        description: "Tài chính ổn nhưng dân bức xúc cao",
        impact: { finance: 10, energy: 5, satisfaction: -20, politics: -15 },
      },
      {
        label: "🔥 Tăng dùng than thay LNG",
        description:
          "Giá rẻ hơn nhưng tăng khí thải và áp lực về mục tiêu xanh",
        impact: { finance: 15, energy: 5, satisfaction: 0, politics: -20 },
      },
      {
        label: "☀️ Tăng tốc điện tái tạo và lưu trữ năng lượng (pin)",
        description: "Giảm phụ thuộc LNG nhưng đầu tư lớn",
        impact: { finance: -20, energy: 10, satisfaction: 10, politics: 20 },
      },
    ],
  },
  {
    id: "military-deployment",
    title: "Quân đội yêu cầu ưu tiên điện lực quân sự",
    icon: "🪖",
    category: "Yêu cầu chính trị",
    description:
      "Tình hình biên giới căng thẳng. Quân đội yêu cầu ELV ưu tiên cấp điện cho các cơ sở quân sự 24/7 với giá rẻ. Điều này sẽ ảnh hưởng đến dân sự và tài chính.",
    choices: [
      {
        label: "✅ Chấp nhận toàn bộ yêu cầu",
        description: "Giữ ổn định chính trị nhưng lỗ tài chính",
        impact: { finance: -15, energy: -5, satisfaction: -5, politics: 20 },
      },
      {
        label: "⚖️ Đàm phán điều khoản",
        description: "Tìm giải pháp thỏa hiệp",
        impact: { finance: -5, energy: 0, satisfaction: 0, politics: 10 },
      },
      {
        label: "💬 Giải thích thực tế & đề xuất thay thế",
        description: "Rủi ro nhưng có thể đạt thỏa thuận hợp lý",
        impact: { finance: 5, energy: 5, satisfaction: 5, politics: 0 },
      },
    ],
  },
];

export function generateEvent(): GameEvent {
  return EVENTS[Math.floor(Math.random() * EVENTS.length)];
}
export function checkGameOver(kpis: Kpis): GameOverResult | null {
  // Check if any KPI is too low (game over condition)
  if (kpis.finance <= 20) {
    return {
      status: "lose",
      reason: "Tập đoàn phá sản - Quốc hội điều tra",
      finalKpis: kpis,
    };
  }

  if (kpis.energy <= 20) {
    return {
      status: "lose",
      reason: "Mất điện toàn quốc - Quân đội vào cuộc",
      finalKpis: kpis,
    };
  }

  if (kpis.satisfaction <= 20) {
    return {
      status: "lose",
      reason: "Bạo loạn xã hội",
      finalKpis: kpis,
    };
  }

  if (kpis.politics <= 20) {
    return {
      status: "lose",
      reason: "Cách chức vì mất tin tưởng chính trị",
      finalKpis: kpis,
    };
  }

  return null;
}
