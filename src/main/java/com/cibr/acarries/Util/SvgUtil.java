package com.cibr.acarries.Util;

import org.apache.batik.transcoder.Transcoder;
import org.apache.batik.transcoder.TranscoderInput;
import org.apache.batik.transcoder.TranscoderOutput;
import org.apache.batik.transcoder.image.JPEGTranscoder;
import org.apache.batik.transcoder.image.PNGTranscoder;
import org.apache.fop.svg.PDFTranscoder;

import java.io.*;

public class SvgUtil {

    //svg文件转成PDF
    public static void convert2Pdf(File svg, File pdf) {
        OutputStream outs =null;
        InputStream ins = null;
        try {
            outs =new BufferedOutputStream(new FileOutputStream(pdf));
            ins= new FileInputStream(svg);
            Transcoder transcoder = new PDFTranscoder();
            TranscoderInput input = new TranscoderInput(ins);
            TranscoderOutput output = new TranscoderOutput(outs);
            transcoder.transcode(input, output);
        } catch (Exception e) {
            e.printStackTrace();
        }finally {
            try {
                ins.close();
                outs.close();
            } catch (IOException e) {
                // TODO Auto-generated catch block
                e.printStackTrace();
            }
        }
    }


    //svg转为png
    public static void convert2Jpeg(File svg, File jpeg){
        InputStream ins = null ;
        OutputStream outs = null;
        try {
            ins= new FileInputStream(svg);
            outs = new BufferedOutputStream(new FileOutputStream(jpeg));
            Transcoder transcoder = new JPEGTranscoder();
            //为防止ERROR: The JPEG quality has not been specified. Use the default one: no compression 错误，需如下配置
            transcoder.addTranscodingHint(JPEGTranscoder.KEY_QUALITY, 0.99f);
            TranscoderInput input = new TranscoderInput(ins);
            TranscoderOutput output = new TranscoderOutput(outs);
            transcoder.transcode(input, output);

        } catch (Exception e) {
            // TODO: handle exception
            e.printStackTrace();
        }finally{
            try {
                ins.close();
                outs.close();
            } catch (Exception ee) {
                // TODO: handle exception
                ee.printStackTrace();
            }
        }
    }

    //svg转为png
    public static void convert2Png(File svg, File png){
        InputStream ins = null ;
        OutputStream outs = null;
        try {
            ins= new FileInputStream(svg);
            outs = new BufferedOutputStream(new FileOutputStream(png));
            Transcoder transcoder = new PNGTranscoder();
            //为防止图片转换时出现图片大小和SVG设置的大小不一致,需要在转换时设置图片大小  2450和150是SVG中width和height
				transcoder.addTranscodingHint(PNGTranscoder.KEY_WIDTH, new Float(520));
				transcoder.addTranscodingHint(PNGTranscoder.KEY_HEIGHT, new Float(520));
            TranscoderInput input = new TranscoderInput(ins);
            TranscoderOutput output = new TranscoderOutput(outs);
            transcoder.transcode(input, output);
        } catch (Exception e) {
            // TODO: handle exception
            e.printStackTrace();
        }finally{
            try {
                ins.close();
                outs.close();
            } catch (Exception ee) {
                // TODO: handle exception
                ee.printStackTrace();
            }
        }
    }

    /**
     * svg 字符串转为 png 图片
     * @param svg
     * @param png
     * @param svgWidth
     * @param svgHeight
     */
    public static void convert2Png(String svg, File png,String svgWidth,String svgHeight){
        InputStream ins = null ;
        OutputStream outs = null;
        try {
            ins= new ByteArrayInputStream(svg.getBytes());
            outs = new BufferedOutputStream(new FileOutputStream(png));
            Transcoder transcoder = new PNGTranscoder();
            transcoder.addTranscodingHint(PNGTranscoder.KEY_WIDTH, new Float(svgWidth));
            transcoder.addTranscodingHint(PNGTranscoder.KEY_HEIGHT, new Float(svgHeight));
            TranscoderInput input = new TranscoderInput(ins);
            TranscoderOutput output = new TranscoderOutput(outs);
            transcoder.transcode(input, output);
        } catch (Exception e) {
            // TODO: handle exception
            e.printStackTrace();
        }finally{
            try {
                ins.close();
                outs.close();
            } catch (Exception ee) {
                // TODO: handle exception
                ee.printStackTrace();
            }
        }
    }

    //字符串转成pdf
    public static void convertStr2Pdf(String svg, File pdf){
        OutputStream outs =null;
        InputStream ins = null;
        try {
            outs =new BufferedOutputStream(new FileOutputStream(pdf));
            ins= new ByteArrayInputStream(svg.getBytes());
            Transcoder transcoder = new PDFTranscoder();
            TranscoderInput input = new TranscoderInput(ins);
            TranscoderOutput output = new TranscoderOutput(outs);
            transcoder.transcode(input, output);
        } catch (Exception e) {
            e.printStackTrace();
        }finally {
            try {
                ins.close();
                outs.close();
            } catch (IOException e) {
                // TODO Auto-generated catch block
                e.printStackTrace();
            }
        }
    }
}