import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const PrivacySection = styled.section`
  padding: 60px 0 100px;
  background: #f8fafc;
  position: relative;
  overflow: hidden;
  margin-top: 80px;
  
  &::before {
    content: '';
    position: absolute;
    top: -300px;
    right: -300px;
    width: 600px;
    height: 600px;
    border-radius: 50%;
    background: linear-gradient(135deg, #6366f1, #818cf8, #f472b6);
    opacity: 0.05;
    z-index: 0;
  }
`;

export const SectionTitle = styled.div`
  text-align: center;
  margin-bottom: 50px;
  
  h2 {
    font-size: 40px;
    font-weight: 700;
    color: #1e293b;
    margin-bottom: 15px;
  }
  
  p {
    font-size: 18px;
    color: #94a3b8;
    max-width: 600px;
    margin: 0 auto;
  }
`;

export const PrivacyContainer = styled.div`
  background: white;
  border-radius: 20px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  padding: 50px;
  position: relative;
  z-index: 1;
  
  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

export const PrivacyToc = styled.div`
  background-color: #f8fafc;
  border-radius: 12px;
  padding: 30px;
  margin-bottom: 40px;
  
  h3 {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 20px;
    color: #1e293b;
    display: flex;
    align-items: center;
    gap: 10px;
    
    svg {
      color: #6366f1;
    }
  }
`;

export const TocList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 10px 20px;
`;

export const TocItem = styled.li`
  flex: 1 0 45%;
  
  @media (max-width: 768px) {
    flex: 1 0 100%;
  }
`;

export const TocLink = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 15px;
  border-radius: 8px;
  transition: all 0.3s ease;
  font-weight: 500;
  color: #1e293b;
  text-decoration: none;
  
  &:hover {
    background-color: rgba(99, 102, 241, 0.05);
    color: #6366f1;
  }
  
  svg {
    min-width: 16px;
  }
`;

export const PrivacySectionContent = styled.div`
  margin-bottom: 40px;
`;

export const PrivacyHeading = styled.h3`
  font-size: 24px;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid #f1f5f9;
  display: flex;
  align-items: center;
  gap: 12px;
  
  svg {
    color: #6366f1;
  }
`;

export const PrivacyText = styled.p`
  font-size: 16px;
  line-height: 1.7;
  color: #1e293b;
  margin-bottom: 20px;
`;

export const PrivacyList = styled.ul`
  padding-left: 20px;
  margin-bottom: 20px;
  
  li {
    margin-bottom: 10px;
    line-height: 1.6;
  }
`;

export const PrivacyHighlight = styled.div`
  background-color: rgba(99, 102, 241, 0.05);
  border-left: 3px solid #6366f1;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
`;

export const PrivacyHighlightTitle = styled.div`
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 10px;
  color: #1e293b;
`;

export const PrivacyDivider = styled.div`
  height: 1px;
  background-color: #e2e8f0;
  margin: 40px 0;
`;

export const PrivacyFooter = styled.div`
  text-align: center;
  margin-top: 40px;
  padding-top: 30px;
  border-top: 1px solid #e2e8f0;
  
  p {
    font-size: 14px;
    color: #94a3b8;
    margin-bottom: 15px;
  }
`;

export const BackToTop = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-weight: 500;
  color: #6366f1;
  transition: all 0.3s ease;
  text-decoration: none;
  
  &:hover {
    transform: translateY(-2px);
  }
`;

export const PreVendaAlert = styled.div`
  background-color: rgba(236, 72, 153, 0.1);
  border-left: 3px solid #ec4899;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 30px;
  display: flex;
  gap: 15px;
  
  .icon {
    color: #ec4899;
    min-width: 24px;
  }
  
  .content {
    flex: 1;
  }
  
  h4 {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 10px;
    color: #ec4899;
  }
  
  p {
    font-size: 15px;
    line-height: 1.6;
    color: #1e293b;
  }
`;
