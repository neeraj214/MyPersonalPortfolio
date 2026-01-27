import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardProject from "../components/CardProject";
import AOS from "aos";
import "aos/dist/aos.css";
import { Boxes, Layers, Award, GraduationCap, Brain, Cloud, ShieldCheck, BarChart3, Server } from "lucide-react";

function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: { xs: 1, sm: 3 } }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const techStacks = [
  { icon: "https://skillicons.dev/icons?i=py", language: "Python" },
  { icon: "https://commons.wikimedia.org/wiki/Special:FilePath/NumPy_logo_2020.svg", language: "NumPy" },
  { icon: "https://raw.githubusercontent.com/pandas-dev/pandas/main/web/pandas/static/img/pandas.svg", language: "Pandas" },
  { icon: "https://skillicons.dev/icons?i=sklearn", language: "scikit-learn" },
  { icon: "https://skillicons.dev/icons?i=tensorflow", language: "TensorFlow" },
  { icon: "https://skillicons.dev/icons?i=pytorch", language: "PyTorch" },
  { icon: "https://huggingface.co/datasets/huggingface/brand-assets/resolve/main/hf-logo.svg", language: "Hugging Face" },
  { icon: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg", language: "OpenAI" },
  { icon: "https://commons.wikimedia.org/wiki/Special:FilePath/Streamlit_logo_primary_colormark_darktext.svg", language: "Streamlit" },
  { icon: "https://skillicons.dev/icons?i=fastapi", language: "FastAPI" },
  { icon: "https://skillicons.dev/icons?i=opencv", language: "OpenCV" },
  { icon: "html.svg", language: "HTML" },
  { icon: "css.svg", language: "CSS" },
  { icon: "firebase.svg", language: "Firebase" },
  { icon: "vercel.svg", language: "Vercel" }
];

const certificateCards = [
  {
    title: "Machine Learning Specialization",
    org: "Coursera",
    year: "2024",
    icon: GraduationCap,
    accent: "from-blue-500/20 via-purple-500/20 to-pink-500/20",
  },
  {
    title: "AWS Certified Cloud Practitioner",
    org: "AWS",
    year: "2025",
    icon: Cloud,
    accent: "from-cyan-500/20 via-blue-500/20 to-purple-500/20",
  },
  {
    title: "Microsoft Azure Fundamentals (AZ-900)",
    org: "Microsoft",
    year: "2024",
    icon: Server,
    accent: "from-indigo-500/20 via-blue-500/20 to-purple-500/20",
  },
  {
    title: "Google Data Analytics Professional",
    org: "Google",
    year: "2025",
    icon: BarChart3,
    accent: "from-teal-500/20 via-blue-500/20 to-purple-500/20",
  },
  {
    title: "Advanced NLP with Transformers",
    org: "Udemy",
    year: "2025",
    icon: Brain,
    accent: "from-fuchsia-500/20 via-purple-500/20 to-blue-500/20",
  },
  {
    title: "Cyber Security Fundamentals",
    org: "Meta",
    year: "2024",
    icon: ShieldCheck,
    accent: "from-purple-500/20 via-pink-500/20 to-blue-500/20",
  },
];

const projectsData = [
  {
    id: "p1",
    Title: "Real-time Emotion Detection (CNN)",
    Description: "Detects facial emotions in live video using CNN with optimized inference.",
    Img: "https://images.unsplash.com/photo-1526378722444-4a1121188589?q=80&w=1200&auto=format&fit=crop",
    TechStack: ["Python", "TensorFlow", "OpenCV", "Streamlit"],
    Link: "https://github.com/neeraj-ml/emotion-detection-cnn"
  },
  {
    id: "p2",
    Title: "Transformer-based Text Summarization API",
    Description: "Abstractive summarization service built with BART/PEGASUS and FastAPI.",
    Img: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop",
    TechStack: ["Python", "Transformers", "NLP", "FastAPI", "Docker"],
    Link: "https://github.com/neeraj-ml/text-summarization-api"
  },
  {
    id: "p3",
    Title: "Financial Fraud Detection (XGBoost)",
    Description: "ML pipeline to flag fraudulent transactions using engineered features.",
    Img: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=1200&auto=format&fit=crop",
    TechStack: ["Python", "scikit-learn", "XGBoost", "Pandas"],
    Link: "https://github.com/neeraj-ml/fraud-detection-xgboost"
  },
  {
    id: "p4",
    Title: "YOLOv8 Object Detection",
    Description: "Custom-trained YOLOv8 model with a Streamlit UI for quick demos.",
    Img: "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?q=80&w=1200&auto=format&fit=crop",
    TechStack: ["Python", "PyTorch", "YOLOv8", "OpenCV", "Streamlit"],
    Link: "https://github.com/neeraj-ml/yolov8-object-detection"
  },
  {
    id: "p5",
    Title: "RAG-based QA Chatbot",
    Description: "Retrieval-Augmented Generation chatbot using FAISS and OpenAI APIs.",
    Img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
    TechStack: ["Python", "LangChain", "FAISS", "OpenAI", "FastAPI"],
    Link: "https://github.com/neeraj-ml/rag-qa-chatbot"
  },
  {
    id: "p6",
    Title: "MLOps: CI/CD Model Deployment",
    Description: "Automated deployment pipeline with GitHub Actions and Vercel.",
    Img: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop",
    TechStack: ["React", "FastAPI", "Docker", "Vercel", "GitHub Actions"],
    Link: "https://github.com/neeraj-ml/mlops-cicd-deployment"
  }
];

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = useState(0);

  useEffect(() => {
    // Initialize AOS once
    AOS.init({
      once: false, // This will make animations occur only once
    });
  }, []);


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // Removed show more logic

  return (
    <div className="md:px-[10%] px-[5%] w-full sm:mt-0 mt-[3rem] bg-[#030014] overflow-hidden" id="Portofolio">
      {/* Header section - unchanged */}
      <div className="text-center pb-10" data-aos="fade-up" data-aos-duration="1000">
        <h2 className="inline-block text-3xl md:text-5xl font-bold text-center mx-auto text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
          <span style={{
            color: '#6366f1',
            backgroundImage: 'linear-gradient(45deg, #6366f1 10%, #a855f7 93%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Portfolio Showcase
          </span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base mt-2">
          Explore my journey through projects, certifications, and technical expertise. 
          Each section represents a milestone in my continuous learning path.
        </p>
      </div>

      <Box sx={{ width: "100%" }}>
        {/* AppBar and Tabs section - unchanged */}
        <AppBar
          position="static"
          elevation={0}
          sx={{
            bgcolor: "transparent",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "20px",
            position: "relative",
            overflow: "hidden",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "linear-gradient(180deg, rgba(139, 92, 246, 0.03) 0%, rgba(59, 130, 246, 0.03) 100%)",
              backdropFilter: "blur(10px)",
              zIndex: 0,
            },
          }}
          className="md:px-4"
        >
          {/* Tabs remain unchanged */}
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            variant="fullWidth"
            sx={{
              // Existing styles remain unchanged
              minHeight: "70px",
              "& .MuiTab-root": {
                fontSize: { xs: "0.9rem", md: "1rem" },
                fontWeight: "600",
                color: "#94a3b8",
                textTransform: "none",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                padding: "20px 0",
                zIndex: 1,
                margin: "8px",
                borderRadius: "12px",
                "&:hover": {
                  color: "#ffffff",
                  backgroundColor: "rgba(139, 92, 246, 0.1)",
                  transform: "translateY(-2px)",
                  "& .lucide": {
                    transform: "scale(1.1) rotate(5deg)",
                  },
                },
                "&.Mui-selected": {
                  color: "#fff",
                  background: "linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(59, 130, 246, 0.2))",
                  boxShadow: "0 4px 15px -3px rgba(139, 92, 246, 0.2)",
                  "& .lucide": {
                    color: "#a78bfa",
                  },
                },
              },
              "& .MuiTabs-indicator": {
                height: 0,
              },
              "& .MuiTabs-flexContainer": {
                gap: "8px",
              },
            }}
          >
            <Tab
              icon={<Layers className="mb-2 w-5 h-5 transition-all duration-300" />}
              label="Projects"
              {...a11yProps(0)}
            />
            <Tab
              icon={<Award className="mb-2 w-5 h-5 transition-all duration-300" />}
              label="Certificates"
              {...a11yProps(1)}
            />
            <Tab
              icon={<Boxes className="mb-2 w-5 h-5 transition-all duration-300" />}
              label="Tech Stack"
              {...a11yProps(2)}
            />
          </Tabs>
        </AppBar>

        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={setValue}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <div className="container mx-auto overflow-hidden pb-[5%]">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projectsData.map((p) => (
                  <CardProject
                    key={p.id}
                    Img={p.Img}
                    Title={p.Title}
                    Description={p.Description}
                    Link={p.Link}
                    id={p.id}
                    TechStack={p.TechStack}
                  />
                ))}
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <div className="container mx-auto overflow-hidden pb-[5%]">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certificateCards.map((card, index) => {
                  const Icon = card.icon;
                  return (
                    <div
                      key={index}
                      className="group relative aspect-square rounded-2xl bg-white/[0.04] border border-white/10 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-white/20"
                      data-aos="fade-up"
                      data-aos-duration={900 + index * 50}
                    >
                      <div className={`absolute -inset-0.5 bg-gradient-to-br ${card.accent} rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500`} />
                      <div className="relative z-10 h-full w-full p-6 flex flex-col">
                        <div className="flex items-start justify-between">
                          <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                            <Icon className="w-6 h-6 text-blue-300" />
                          </div>
                          <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-slate-300">
                            {card.year}
                          </span>
                        </div>
                        <div className="mt-4">
                          <h3 className="text-lg font-semibold bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 bg-clip-text text-transparent">
                            {card.title}
                          </h3>
                          <p className="text-slate-400 text-sm mt-1">{card.org}</p>
                        </div>
                        <div className="mt-auto">
                          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                          <div className="mt-4 flex items-center gap-2 text-xs text-slate-400">
                            <Award className="w-4 h-4 text-purple-300" />
                            <span>Certificate • Verified Achievement</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            <div className="container mx-auto flex justify-center items-center overflow-hidden pb-[5%]">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6" role="list">
                {techStacks.map((stack, index) => (
                  <div
                    key={index}
                    role="listitem"
                    aria-label={stack.language}
                    className="rounded-xl bg-white/5 border border-white/10 p-5 flex flex-col items-center justify-center min-h-[180px] md:min-h-[200px] hover:bg-white/10 transition-all duration-300 hover:shadow-xl"
                  >
                    <div className="w-20 h-20 md:w-24 md:h-24">
                      <img
                        src={stack.icon}
                        alt={`${stack.language} logo`}
                        className="w-full h-full object-contain"
                        loading="lazy"
                      />
                    </div>
                    <span className="mt-3 text-sm md:text-base text-slate-200 font-semibold">
                      {stack.language}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </TabPanel>
        </SwipeableViews>
      </Box>
    </div>
  );
}
